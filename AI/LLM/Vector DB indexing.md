# inverted file Index

* known as IVFflat
* available in FAISS
* ANN strategy [Approaximate Nearest Neihgbour] 
* clusters all the vectors
```
When you create the index, IVFFlat runs k-means clustering over all the vectors in the table. The lists parameter controls how many clusters (centroids) are created.
CREATE INDEX rules_vec_idx
  ON rules_mirror USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);
  So your ~26k rule embeddings get partitioned into 100 buckets, each containing ~260 vectors on average. Each bucket stores its vectors flat (uncompressed — hence "Flat" in the name).
  ```
* K-means is used
* centroid for each cluster
* Adding new vector - add to nearest centroid's list
* Retrieval - find closest centroid (nprobe centroids - n most)
* once selected exlpore these centroids only
* return top k similar centroids
* 1. Build time — cluster the vectors
## IVFFlat (Inverted File with Flat Quantization)

IVFFlat is an **approximate nearest neighbor (ANN)** index strategy. Instead of comparing your query vector against every single row (exact search), it partitions the vector space to narrow down the search.

### How it works, step by step

**1. Build time — cluster the vectors**

When you create the index, IVFFlat runs **k-means clustering** over all the vectors in the table. The `lists` parameter controls how many clusters (centroids) are created.

```sql
CREATE INDEX rules_vec_idx
  ON rules_mirror USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);  -- 100 clusters
```

So your ~26k rule embeddings get partitioned into 100 buckets, each containing ~260 vectors on average. Each bucket stores its vectors **flat** (uncompressed — hence "Flat" in the name).

**2. Query time — probe a subset of clusters**

When a query vector arrives, IVFFlat:

1. Compares the query to all 100 **centroids** (cheap — only 100 comparisons).
2. Picks the closest `probes` centroids (default is 1; you typically set it higher).
3. Does **exact distance computation** against every vector inside those selected clusters only.

```sql
SET ivfflat.probes = 10;  -- scan the 10 nearest clusters
```

With `probes = 10` and `lists = 100`, you're scanning ~2,600 vectors out of 26,000 — a 10× speedup over brute force, while still getting good recall.

### Visual intuition

```
                    26,000 vectors
                         │
           k-means (build time)
                         │
    ┌────┬────┬────┬─────┼─────┬────┬────┬────┐
    │    │    │    │     │     │    │    │    │
   L1   L2   L3   L4   L5   L6  ...  L99  L100
  ~260 ~260 ~260 ~260  ~260 ~260      ~260 ~260

Query arrives:
  1. Compare query to 100 centroids         ← fast
  2. Pick closest 10 centroids (probes=10)  ← e.g. L3, L7, L12, ...
  3. Exact scan ~2,600 vectors in those 10  ← accurate within those lists
  4. Return top-k results
```

### The key trade-off knobs

| Parameter | Set at | Effect |
|---|---|---|
| `lists` | Index creation | More lists = faster queries but lower recall per probe (each list is smaller, easier to miss the right one) |
| `probes` | Query time | More probes = better recall but slower queries (scanning more lists) |

The **rule of thumb** from pgvector docs: `lists = sqrt(N)` for up to 1M rows, `probes = sqrt(lists)` for a balanced recall/speed trade-off. For 26k rows, `lists = 100` and `probes = 10` is reasonable.

### Why "Inverted File"

The name comes from information retrieval. Just like a text inverted index maps "word → list of documents containing it," IVFFlat maps "cluster centroid → list of vectors assigned to it." At query time, you look up the relevant centroids and retrieve their associated vectors — same pattern.

### The two practical pain points

**1. Stale clusters after writes.** The centroids are frozen at index build time. If you insert a lot of new vectors, they get assigned to the nearest existing centroid, but the centroids themselves don't move. Over time, cluster boundaries drift and recall degrades. That's why the design doc calls for nightly `REINDEX` — it re-runs k-means to recompute centroids from scratch.

**2. Pre-filtered queries.** When you add a `WHERE type = 0 AND category_ids @> ...` filter, some clusters may lose most of their vectors to the filter. If your probed clusters happen to be those sparse ones, you get fewer results than expected. IVFFlat has no way to "skip to the next cluster" mid-scan — it commits to the probe set upfront.

This is exactly the issue I flagged for your design: with heavy structural pre-filters and hard cosine thresholds driving create-vs-update decisions, those missed neighbors matter. HNSW avoids this because it traverses a graph rather than scanning fixed partitions.
# HNSW
https://www.youtube.com/watch?v=77QH0Y2PYKg

## HNSW (Hierarchical Navigable Small World)

HNSW is an approximate nearest neighbor (ANN) index built on a **multi-layer graph**. Instead of partitioning vectors into buckets (like IVFFlat), it connects vectors to each other as nodes in a navigable graph and traverses that graph at query time.

The name comes from the two ideas it combines:

- **NSW (Navigable Small World):** a graph where any node can reach any other node in a small number of hops — like the "six degrees of separation" concept.
- **Hierarchical:** multiple layers of such graphs, from sparse (top) to dense (bottom), enabling coarse-to-fine search.

---

### The data structure: a multi-layer graph

Imagine a skip-list, but instead of a sorted linked list, each level is a proximity graph over vectors.

```
Layer 3 (sparsest):    [A] ──────────────────── [M]
                        │                         │
Layer 2:               [A] ────── [F] ────────── [M] ──── [T]
                        │          │               │        │
Layer 1:          [A]──[C]──[F]──[H]──[K]──[M]──[P]──[T]──[W]
                   │    │    │    │    │    │    │    │    │
Layer 0 (densest): every single vector is here, each connected
                   to its M nearest neighbors
```

**Key properties:**

- **Layer 0** contains *all* N vectors. Each is connected to up to `M` nearest neighbors (bidirectional edges).
- **Higher layers** contain exponentially fewer nodes — a node inserted at layer 0 is promoted to layer 1 with probability `1/ln(M)`, to layer 2 with probability `(1/ln(M))²`, and so on.
- The top layer has just a handful of nodes that act as **long-range express highways**.

---

### Index build (insertion)

When you insert a new vector `q`:

**Step 1 — Assign a random max layer.**

A random number determines the highest layer this node will appear in. Most nodes only live on layer 0. A few make it to layer 1. Very few reach layer 2+. This follows an exponential distribution — the same probabilistic promotion as a skip list.

```
P(node appears on layer L) = (1/ln(M))^L

For M=16:  ~64% layer 0 only
           ~23% up to layer 1
           ~8%  up to layer 2
           ~3%  up to layer 3
           ...
```

**Step 2 — Find entry point and greedy descend.**

Starting from the single entry point at the top layer, greedily walk toward `q` at each layer (always moving to the neighbor closest to `q`). This is cheap because upper layers are sparse — a few hops cover large distances.

**Step 3 — Insert and connect at each layer (top-down to layer 0).**

At each layer where `q` will live:

1. Run a **local beam search** (width = `ef_construction`) to find the `M` closest existing nodes to `q`.
2. Create bidirectional edges between `q` and those `M` neighbors.
3. If any neighbor now exceeds its max connection count, **prune** its weakest edge (the one to its most distant neighbor).

This is where `ef_construction` matters — it controls how thoroughly you search for the best neighbors during build. Higher = better graph quality, slower build.

```
Inserting node Q into layer 1:

Before:                          After:
  A ─── C ─── F                   A ─── C ─── F
  │           │                   │     │     │
  D ─── E     G                   D ─── E  Q  G
                                        │ ╱ │
                                        Q───G
                                  (Q connected to E, F, G — its 3 nearest)
```

**Step 4 — Descend to the next layer and repeat** until layer 0.

---

### Query (search)

When you query with vector `q`, asking for `k` nearest neighbors:

**Phase 1 — Greedy descent through upper layers.**

Starting from the entry point at the top layer, greedily move to the neighbor closest to `q`. Repeat at each layer downward. This rapidly narrows the search region — each layer roughly halves the remaining distance.

```
Layer 3:  entry → [A] ─greedy─→ [M]          (M is closer to q)
                                  │
Layer 2:                    [M] → [T]         (T is closer to q)
                                   │
Layer 1:                     [T] → [W]        (W is closer)
                                    │
Layer 0:                  start beam search from [W]
```

**Phase 2 — Beam search on layer 0.**

At the bottom layer (which contains every vector), run a **beam search** with beam width = `ef_search`:

1. Maintain a **candidate set** (min-heap by distance to `q`) and a **result set** (max-heap, capped at `ef_search`).
2. Pop the closest unvisited candidate.
3. Expand its neighbors: compute distance to `q` for each. If closer than the worst result so far, add to both heaps.
4. Stop when all remaining candidates are farther than the worst result.
5. Return the top `k` from the result set.

```
Beam search on layer 0 (ef_search=10, k=5):

Start at W.  Expand W's neighbors: [T, X, V, U]
    → V is closest to q. Expand V's neighbors: [U, S, W, Y]
    → S is closest unexplored. Expand S's neighbors: [R, T, V, Q']
    → Q' is very close! Expand Q': [S, P, R]
    → ... continue until no candidate beats the 10th-best result
    → Return top 5 from the 10 best found.
```

---

### The three tuning parameters

| Parameter | Set at | What it controls | Effect of increasing |
|---|---|---|---|
| `m` | Index creation | Max edges per node per layer | Better recall, more memory, slower build |
| `ef_construction` | Index creation | Beam width during insert | Better graph quality (edges connect to true nearest neighbors), slower build |
| `ef_search` | Query time | Beam width during search | Better recall, slower queries |

**How they interact:**

- `m` determines the graph's **connectivity**. Too low (e.g., 4) and the graph fragments — searches get trapped in local minima. Too high (e.g., 64) and you're storing and traversing many edges for marginal recall gain. **16 is the standard default** and works well for most workloads up to millions of vectors.

- `ef_construction` determines **build-time search thoroughness**. If it's too low, a node might connect to a suboptimal neighbor because the builder didn't look far enough. This creates weak edges that hurt every future query traversing through that node. **64–100 is typical**; higher values improve recall at the cost of build time.

- `ef_search` is the **query-time recall knob**. It must be ≥ `k` (you can't return 10 results from a beam of width 5). At your scale (26k vectors), `ef_search = 40` likely gives >99% recall.

---

### Why HNSW handles pre-filtered queries better than IVFFlat

This is directly relevant to your design. Your queries look like:

```sql
SELECT * FROM rules_mirror
WHERE is_current = TRUE
  AND type = 0
  AND item_category_ids ?| '{1234,5678}'
ORDER BY embedding <=> query_embedding
LIMIT 5;
```

**IVFFlat's problem:** it picks the `probes` closest centroids *before* applying the filter. If those clusters happen to have mostly `type = 1` or non-overlapping categories, you get few or no results from the probed clusters. The vectors you need might be in cluster 47, but you only probed clusters 3, 12, and 28.

**HNSW's advantage:** graph traversal is **adaptive**. When a node is visited but fails the filter, HNSW doesn't discard it — it still expands that node's neighbors to keep traversing. The beam search continues until it finds `ef_search` qualifying nodes or exhausts reachable candidates. Filtered-out nodes serve as **stepping stones** rather than dead ends.

```
IVFFlat with filter:
  Probe cluster 5 → [✗ ✗ ✓ ✗ ✗ ✗ ✓ ✗]  → only 2 results from 260 vectors
  Probe cluster 9 → [✗ ✗ ✗ ✗ ✓ ✗ ✗ ✗]  → only 1 result
  → 3 total, wanted 5. Missed good candidates in cluster 14.

HNSW with filter:
  Visit A (✗ filter) → still expand A's neighbors → visit B, C, D
  Visit B (✓ filter) → add to results, expand B's neighbors
  Visit C (✗ filter) → expand C's neighbors → find E, F
  Visit F (✓ filter) → add to results, keep going...
  → naturally navigates through non-matching nodes to reach matching ones
```

---

### Memory layout

For 26k vectors × 1536 dimensions:

| Component | Size |
|---|---|
| Raw vectors | ~160 MB (26k × 1536 × 4 bytes) |
| Graph edges (layer 0) | ~3.2 MB (26k nodes × 16 edges × 8 bytes per edge) |
| Upper layer edges | ~1 MB (exponentially fewer nodes) |
| **Total HNSW overhead** | **~4–5 MB beyond raw vectors** |

At this scale, HNSW's memory overhead is negligible.

---

### Build time vs. IVFFlat

| | IVFFlat (lists=100) | HNSW (m=16, ef_construction=64) |
|---|---|---|
| Algorithm | k-means (100 iterations) | N sequential inserts with beam search |
| Build time at 26k × 1536 | ~1–2 seconds | ~5–15 seconds |
| Incremental insert | Appended to nearest cluster (cheap, but clusters go stale) | Fully integrated into graph (no staleness) |
| Reindex needed? | Yes, after significant churn | No — graph stays fresh automatically |

The 5–15 second build time is a one-time cost. After that, every hourly sync batch is absorbed incrementally without any maintenance job.

---

### What the pgvector index creation looks like

```sql
CREATE INDEX rules_vec_idx
  ON rules_mirror USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);
```

At query time:

```sql
SET hnsw.ef_search = 40;  -- beam width, adjustable per session

SELECT id, revision, name, 1 - (embedding <=> $1) AS similarity
FROM rules_mirror
WHERE is_current = TRUE
  AND type = $2
  AND item_category_ids ?| $3
ORDER BY embedding <=> $1
LIMIT 5;
```

---

### Summary: why HNSW fits your design

| Concern from your design | HNSW behavior |
|---|---|
| Hourly batch syncs with 5%+ churn | Incremental inserts keep graph fresh — no `REINDEX` job needed |
| Heavy structural pre-filters (`type`, `category`) | Graph traversal adapts around filtered-out nodes |
| Hard cosine thresholds (0.80, 0.92) driving create/update | Near-exact recall at 26k means thresholds behave deterministically |
| Low QPS (~500/day) + Redis cache | Sub-millisecond query latency, cache mostly absorbs repeat queries |
| Future growth path | HNSW scales to millions; upgrade to AlloyDB/ScaNN only if you hit tens-of-millions |
