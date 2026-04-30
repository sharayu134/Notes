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
## IVFFlat vs HNSW: When to Use Which

### Quick decision framework

| | **Choose IVFFlat** | **Choose HNSW** |
|---|---|---|
| **Corpus size** | Millions+ where build time matters | Any size, especially < 1M |
| **Write pattern** | Bulk load, rarely updated | Continuous inserts/updates |
| **Query filters** | Unfiltered or lightly filtered | Heavy pre-filters |
| **Latency budget** | Relaxed (tens of ms okay) | Strict (sub-ms needed) |
| **Memory budget** | Tight — every MB counts | Comfortable |
| **Recall requirement** | "Good enough" (90–95%) | Near-exact (>99%) |
| **Ops appetite** | Willing to run periodic REINDEX | Prefer zero maintenance |

---

### The fundamental architectural difference

**IVFFlat** is a **partitioning** strategy — divide the space into buckets, only search a few.

**HNSW** is a **graph traversal** strategy — connect neighbors, walk the graph toward the answer.

This single difference cascades into every trade-off below.

---

## Trade-off 1: Build time vs. query quality

### IVFFlat wins when you bulk-load and rarely rebuild

IVFFlat runs k-means once at build time. For large datasets, this is dramatically faster than HNSW's sequential graph construction.

**Example — e-commerce product catalog (10M products, nightly full refresh):**

```
Scenario: You rebuild your search index nightly from a data warehouse export.
          10M product embeddings × 768 dimensions.

IVFFlat (lists=3162):
  Build time: ~2–4 minutes
  Nightly rebuild fits easily in a maintenance window.

HNSW (m=16, ef_construction=100):
  Build time: ~30–60 minutes
  Nightly rebuild is painful. Eats into your maintenance window.
  You'd need to build on a replica and swap.
```

**Verdict:** If your workflow is "dump all vectors → build index → serve reads until next dump," IVFFlat's fast build is a major advantage.

### HNSW wins when data trickles in continuously

HNSW absorbs new vectors incrementally — each insert is a few graph edge updates. IVFFlat appends new vectors to the nearest cluster, but the centroids go stale.

**Example — your rule mirror (26k rules, hourly sync of ~50–200 changed rows):**

```
IVFFlat:
  Hourly sync inserts/updates ~100 rows.
  New vectors assigned to nearest frozen centroid — may not be ideal.
  After a few days, cluster boundaries drift.
  Need nightly REINDEX to restore recall.

HNSW:
  Hourly sync inserts/updates ~100 rows.
  Each row is wired into the graph with proper neighbor connections.
  Graph stays fresh indefinitely. No REINDEX ever.
```

**Verdict:** Continuous writes favor HNSW. You trade a longer initial build (seconds at 26k) for zero ongoing maintenance.

---

## Trade-off 2: Memory

### IVFFlat wins when memory is tight

IVFFlat stores: raw vectors + 100 centroid vectors + a mapping from centroid → vector list. Overhead is negligible.

HNSW stores: raw vectors + a multi-layer adjacency graph (each node stores `M` neighbor IDs per layer).

**Example — IoT anomaly detection (50M sensor embeddings × 128-d, running on a 16 GB machine):**

```
Raw vectors: 50M × 128 × 4 bytes = 25.6 GB  ← doesn't fit either way

But at a more feasible 5M × 128-d:
  Raw vectors: 2.56 GB

  IVFFlat overhead: ~10 MB (centroids + list pointers)
  Total: ~2.57 GB ✓

  HNSW overhead: ~640 MB (5M × 16 edges × 8 bytes, plus upper layers)
  Total: ~3.2 GB

  Difference: 630 MB — that's real on a constrained machine.
```

**Verdict:** At multi-million scale on memory-constrained infra, IVFFlat's minimal overhead matters. At your scale (26k), the difference is 0 MB vs 4 MB — irrelevant.

---

## Trade-off 3: Filtered queries

### HNSW wins when queries have WHERE clauses

This is the most under-discussed trade-off and the one most relevant to your system.

**Example — multi-tenant SaaS (500k documents, each tagged with a `tenant_id`, queries always filter by tenant):**

```sql
SELECT * FROM documents
WHERE tenant_id = 'acme-corp'    -- 2,000 of 500k docs belong to this tenant
ORDER BY embedding <=> $query
LIMIT 10;
```

**IVFFlat behavior:**

```
lists=700, probes=20

Step 1: Find 20 closest centroids to query.
Step 2: Scan all vectors in those 20 clusters (~14,000 vectors).
Step 3: Apply filter: tenant_id = 'acme-corp'.

Problem: Acme's 2,000 docs are spread across all 700 clusters.
         In your 20 probed clusters, maybe only ~57 Acme docs exist.
         After filtering, you're picking top-10 from ~57 candidates.
         The actual nearest Acme doc might be in a cluster you didn't probe.

Recall: unpredictable — could be 70%, could be 95%.
```

**HNSW behavior:**

```
Step 1: Start at graph entry point, descend to layer 0.
Step 2: Beam search (ef_search=40).
        Visit node → check filter → if tenant_id ≠ 'acme-corp',
        DON'T add to results, but DO expand its neighbors.
        Keep walking until 40 qualifying nodes found.

The non-matching nodes act as bridges to reach matching ones.
Recall: consistently >99%.
```

**Your system's version of this problem:**

```sql
WHERE is_current = TRUE          -- cuts ~26k to ~15k
  AND type = 0                   -- cuts to ~15.6k (most are type 0, but other types lose heavily)
  AND item_category_ids ?| $cats -- cuts further, possibly to hundreds
```

When the surviving set is a small fraction of the total, IVFFlat's fixed-cluster probing gets unreliable. HNSW's adaptive traversal stays robust.

---

## Trade-off 4: Recall consistency

### HNSW wins on recall predictability

**Example — legal document similarity (100k documents, litigation depends on finding the right precedent):**

```
You need to find the 5 most similar prior cases to a new filing.
Missing a relevant precedent could mean losing a case.

IVFFlat (lists=316, probes=30):
  Recall averages 95%, but varies from 85–99% per query.
  Some queries land unluckily between cluster boundaries.
  You don't know which queries got bad recall.

HNSW (m=16, ef_search=100):
  Recall averages 99.5%, varies from 98–100%.
  The graph structure means even adversarial query positions
  get reached within a few extra hops.
```

**Verdict:** When recall variance matters more than average recall, HNSW is safer. For your Approval agent's cosine thresholds (0.80 / 0.92), a single missed neighbor can flip a `create` to an `update`. You need consistent recall, not good-on-average recall.

---

## Trade-off 5: Tuning complexity

### IVFFlat wins on simplicity (sort of)

IVFFlat has two knobs: `lists` (build-time) and `probes` (query-time). Rules of thumb exist:

```
lists  = sqrt(N)         → for N < 1M
lists  = N / 1000        → for N > 1M
probes = sqrt(lists)     → balanced default
```

HNSW has three knobs, and their interactions are subtler:

```
m                = 16    → almost always fine (12–32 range)
ef_construction  = 64    → higher = better graph, slower build
ef_search        = 40    → higher = better recall, slower query
```

**But here's the catch:** IVFFlat's "simplicity" is deceptive. The interaction between `lists`, `probes`, and **your filter selectivity** is hard to reason about. You tune probes for unfiltered recall, deploy, then a filtered query silently gets 80% recall. With HNSW, `ef_search` behaves predictably regardless of filters.

---

## Trade-off 6: Deletion handling

### HNSW has a real weakness here

**Example — content moderation platform (1M posts, 10k deleted daily, embeddings must be removed):**

```
IVFFlat:
  Delete a vector → remove from its cluster's list. Clean.
  Cluster centroids are slightly stale, but REINDEX fixes it.

HNSW:
  Delete a vector → mark as deleted, but the graph edges remain.
  Other nodes still point to the deleted node as a neighbor.
  Over time, the graph accumulates "tombstones" that waste traversal steps.
  pgvector handles this with VACUUM, but heavy delete churn (>10%/day)
  can degrade query performance between vacuums.
```

**Your system:** Rules are soft-deleted upstream and synced as `is_current = FALSE`. You're not physically deleting rows from `rules_mirror` — they just stop matching the `WHERE is_current = TRUE` filter. So this trade-off doesn't apply to you.

---

## Trade-off 7: Scaling ceiling

### Both have different ceilings

**IVFFlat** scales to hundreds of millions with proper tuning, but recall degrades gradually and you need more aggressive probing (slower queries) to compensate.

**HNSW** scales to tens of millions comfortably in pgvector. Beyond that, memory becomes the bottleneck (the graph itself gets large). Dedicated vector DBs (Pinecone, Weaviate) or AlloyDB with ScaNN handle the 100M+ range.

**Example — Spotify-scale music recommendation (100M track embeddings):**

```
IVFFlat (lists=100,000, probes=500):
  Build: ~30 minutes. Workable.
  Query: scanning ~1,000 vectors per query. ~10ms. Fine.
  Memory overhead: minimal.
  Trade-off: recall plateaus at ~93% without aggressive probing.

HNSW (m=32, ef_construction=200):
  Build: ~6 hours. Painful.
  Query: ~50 hops × 32 neighbors checked. ~2ms. Faster.
  Memory overhead: ~50 GB for the graph alone.
  Trade-off: needs beefy machines.

At this scale, neither pgvector option is ideal.
You'd use ScaNN, Faiss, or a managed vector DB.
```

---

## Summary cheat sheet

| Scenario | Winner | Why |
|---|---|---|
| Nightly bulk reload, 10M+ vectors | **IVFFlat** | Fast rebuild, low memory |
| Continuous inserts, < 1M vectors | **HNSW** | No reindex, graph stays fresh |
| Queries with WHERE clauses | **HNSW** | Adaptive traversal through non-matching nodes |
| Strict recall requirements | **HNSW** | Consistent >99% vs IVFFlat's variable 85–99% |
| Memory-constrained environment | **IVFFlat** | Negligible overhead vs HNSW's graph storage |
| Heavy delete churn (>10%/day) | **IVFFlat** | Cleaner deletion semantics |
| Ultra-large scale (100M+) | **Neither in pgvector** | Use ScaNN / Faiss / managed vector DB |

