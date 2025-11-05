## 🔎 What is Lexical Search?

**Lexical search** is a traditional search method that matches **exact words, phrases, or tokens** in text.

* It looks at the **literal form** of words (their spelling), not their meaning.
* Usually implemented using **inverted indexes** (like in search engines, databases, or Elasticsearch).
* Queries are matched against documents based on the **presence/absence and frequency** of terms.

### Example

Query: `"apple phone"`

* Lexical search retrieves documents containing the tokens **“apple”** and **“phone”**, regardless of meaning.
* It won’t match documents about “iPhone” unless that exact word also appears.

---

## 🧠 How It Differs from Semantic Search

* **Lexical Search**: Matches *surface forms* of words. Works well for precision but struggles with synonyms, context, or meaning.
* **Semantic Search**: Uses embeddings (e.g., BERT, word2vec) to capture meaning, so `"apple phone"` might also match `"iPhone"` or `"Apple smartphone"`.

---

## ⚙️ Common Implementations

* **SQL LIKE queries** (basic form of lexical search).
* **Inverted Index** (used in Elasticsearch, Lucene, Solr).
* **BM25 algorithm** (ranking documents by term frequency and inverse document frequency).

---

1. **Trade-offs**

   * Lexical = fast, interpretable, high precision.
   * Fails at recall when synonyms/paraphrases matter.
2. **When to use**
   * Good for structured text or when exact matches are required.
   * Often combined with semantic search in a **hybrid search system**.

---

Lexical search = exact term matching (string-based). It’s the **baseline** in search systems. But real-world ML systems usually combine lexical (fast filtering) with semantic embeddings (deep understanding).

---
