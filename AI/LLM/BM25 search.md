Your design doc references BM25 extensively. Here's a breakdown:

## What is BM25?

**BM25** (Best Matching 25) is a **lexical/keyword-based ranking function** used in information retrieval. It scores how relevant a document is to a given search query based on the terms (words) that appear in both.

### How it works (intuition)

BM25 improves on simple TF-IDF by considering three things:

1. **Term Frequency (TF) saturation** — A word appearing 10 times in a document isn't 10x more relevant than it appearing once. BM25 applies a saturation curve so additional occurrences yield diminishing returns.

2. **Inverse Document Frequency (IDF)** — Rare terms (e.g., "lithium-battery") are more informative than common ones (e.g., "item"). BM25 weights rare terms higher.

3. **Document length normalization** — Longer documents naturally contain more terms. BM25 normalizes scores so short, focused documents aren't penalized relative to long ones.

The formula (simplified):

```
score(D, Q) = Σ IDF(qi) * [ tf(qi, D) * (k1 + 1) ] / [ tf(qi, D) + k1 * (1 - b + b * |D|/avgdl) ]
```

Where `k1` (typically 1.2–2.0) controls TF saturation and `b` (typically 0.75) controls length normalization.

### Key property

BM25 is a **sparse, exact-match** method — it only scores documents that share actual tokens with the query. It does **not** understand synonyms or semantic similarity (e.g., "prohibited" vs "banned" would not match).

---

## Where is BM25 applicable?

### General use cases

| Use Case | Why BM25 fits |
|---|---|
| **Full-text search engines** (Elasticsearch, PostgreSQL `tsvector`) | Fast, interpretable keyword ranking |
| **Document retrieval** | Ranking large corpora by keyword relevance |
| **Log search / code search** | Exact token matching is essential |
| **E-commerce product search** | Matching product names, descriptions by keywords |
| **Legal / patent search** | Specific terminology must match exactly |


This **hybrid** approach is common in production RAG systems because BM25 and vector search are complementary — BM25 catches what embeddings miss (exact terms), and embeddings catch what BM25 misses (synonyms/paraphrases). Your design indexes `human_readable_text` with a GIN `tsvector` index for BM25 scoring:

```235:238:DESIGN_DOC.md
- **BM25 lexical index:**
// ...
CREATE INDEX rules_bm25_idx
```

In short: BM25 is the "keyword precision" half of your retrieval, ensuring that when a rule explicitly mentions "lithium battery" and the query says "lithium battery," it gets surfaced — even if the embedding model doesn't place them close enough in vector space.
