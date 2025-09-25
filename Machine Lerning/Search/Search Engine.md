## 🔎 What is a Search Engine?

A **search engine** is a system that **retrieves relevant information from a large corpus** of documents, websites, or data, based on a user’s query.

At its core, a search engine has two jobs:

1. **Indexing** – Preprocessing documents so they can be searched quickly.
2. **Retrieval + Ranking** – Given a query, finding and ordering documents by relevance.

---

## ⚙️ Key Components of a Search Engine

1. **Crawler (for web search engines)**

   * Collects documents (e.g., web pages).
   * Not always present in enterprise/product search (documents may already be ingested).

2. **Document Processing & Indexing**

   * Tokenization, stopword removal, stemming/lemmatization.
   * Building an **inverted index** → maps each word to a list of documents containing it.

3. **Query Processing**

   * Parsing the user query into tokens.
   * Applying filters, spell correction, query expansion (synonyms, stemming).

4. **Retrieval Layer**

   * Initial candidate retrieval using **lexical search** (e.g., BM25, inverted index lookup).
   * Typically fetches top *N* candidates (e.g., 1000 documents).

5. **Ranking Layer**

   * Uses relevance models to re-rank candidates.
   * Can be **heuristic-based** (BM25 score, PageRank) or **ML-based** (learning-to-rank, BERT-based re-rankers).

6. **Serving Layer**

   * Delivers results quickly to the user.
   * Handles latency, caching, personalization, and experimentation (A/B testing).

---

## 🧠 Types of Search Engines

* **Lexical Search Engines**: Rely on word matches (e.g., Elasticsearch, Solr).
* **Semantic Search Engines**: Use embeddings and neural models (e.g., vector databases like Pinecone, Weaviate, Vespa).
* **Hybrid Engines**: Combine both (most production systems today).

---

