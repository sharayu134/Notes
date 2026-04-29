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
