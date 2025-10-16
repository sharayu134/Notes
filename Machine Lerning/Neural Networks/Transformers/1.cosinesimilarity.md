Here’s a **last-minute revision sheet for Cosine Similarity** — compact, interview-focused, and ML-oriented 👇

---

## 🧠 Core Concept

**Cosine Similarity** measures how similar two vectors are **regardless of their magnitude**, based on the **angle** between them.

[
\text{Cosine Similarity} = \frac{A \cdot B}{||A|| \times ||B||}
]

Where:

* (A \cdot B) = dot product of vectors
* (||A||), (||B||) = magnitudes (Euclidean norms)

Value range:

* +1 → perfectly similar (same direction)
* 0 → orthogonal (no similarity)
* −1 → completely opposite

---

## ⚙️ Quick Example

A = [1, 2, 3], B = [2, 3, 4]

[
A \cdot B = 1*2 + 2*3 + 3*4 = 20
]
[
||A|| = \sqrt{14}, \quad ||B|| = \sqrt{29}
]
[
\text{cosine similarity} = \frac{20}{\sqrt{14 \times 29}} ≈ 0.97
]

High similarity → almost parallel vectors.

---

## 🧩 Why It’s Important in ML

### 1. **Text and NLP**

* Used in **TF-IDF**, **word embeddings**, and **sentence embeddings**.
* Compares **semantic similarity** between documents, queries, etc.
* Example: In a **retrieval system**, cosine similarity is used to rank documents by closeness to a query vector.

### 2. **Recommendation Systems**

* Measures similarity between **user profiles** or **item embeddings**.
* Example: Recommend items whose feature vectors have high cosine similarity with a user’s embedding.

### 3. **Clustering / Classification**

* Often used instead of Euclidean distance in **high-dimensional, sparse spaces** (like text data).
* Works better when vector **magnitude is not meaningful**, only **direction** matters.

---

## 🧠 Interview Tip Section

**Conceptual Questions**

* Why cosine similarity over Euclidean distance?

  > Cosine focuses on direction, not magnitude — great when feature scales differ (e.g., text frequencies).
* What happens if you normalize vectors first?

  > Then cosine similarity equals dot product.
* Is it a metric?

  > Not exactly — cosine *distance* (1 − cosine similarity) can be used as a metric (but fails triangle inequality in some cases).

**System Design Use-Cases**

* In a **vector database** (e.g., FAISS, Pinecone), cosine similarity is used for nearest-neighbor search.
* During **ML model serving**, embeddings are stored and compared using cosine similarity for matching or retrieval tasks.

---

## 🧮 Variants & Related Measures

| Measure                | Formula                        | Key Idea               |       |   |   |                               |
| ---------------------- | ------------------------------ | ---------------------- | ----- | - | - | ----------------------------- |
| **Cosine Distance**    | (1 - \text{cosine similarity}) | Used in clustering     |       |   |   |                               |
| **Dot Product**        | (A \cdot B)                    | Sensitive to magnitude |       |   |   |                               |
| **Euclidean Distance** | (                              |                        | A - B |   | ) | Considers absolute difference |

---

## 🚀 Fast Recap Mnemonics

* **“Cosine = Angle Only”** → ignores length
* **“Normalize → Dot Product = Cosine”**
* **“Used for embeddings, not raw features”**

---

Perfect — let’s compute **Cosine Similarity** between these two sentences:

> **Sentence 1:** “Hello”
> **Sentence 2:** “Hello words”

We’ll go step by step (as you’d explain in an interview).

---

## 🧠 Step 1. Represent Sentences as Vectors

We’ll use a simple **Bag of Words (BoW)** model for demonstration — it’s the easiest way to show cosine similarity.

Our vocabulary (unique words) across both sentences is:
`["hello", "words"]`

Now, represent each sentence as a vector of word counts:

| Sentence      | hello | words |
| ------------- | ----- | ----- |
| “Hello”       | 1     | 0     |
| “Hello words” | 1     | 1     |

So:

* A = [1, 0]
* B = [1, 1]

---

## ⚙️ Step 2. Compute Dot Product & Magnitudes

[
A \cdot B = (1×1) + (0×1) = 1
]

[
||A|| = \sqrt{1^2 + 0^2} = 1
]
[
||B|| = \sqrt{1^2 + 1^2} = \sqrt{2}
]

---

## 🧮 Step 3. Compute Cosine Similarity

[
\text{cosine similarity} = \frac{A \cdot B}{||A|| \times ||B||} = \frac{1}{1 \times \sqrt{2}} = 0.7071
]

✅ **Final Answer:** **0.707 (≈ 70.7% similar)**

---

## 🔍 Interpretation

* “Hello” and “Hello words” share the **same direction** (both use “hello”),
  but “Hello words” has an extra dimension (“words”) → hence, **partial similarity**.
* If both were identical (“Hello”, “Hello”), cosine similarity = **1.0**.

---

## 💡 Interview Insights

| Concept                                                                                                                        | Importance |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| Shows how adding new terms reduces similarity — used in **text retrieval systems**.                                            |            |
| In real NLP tasks, BoW is replaced with **TF-IDF** or **embedding vectors**.                                                   |            |
| Using word embeddings (e.g., from BERT), similarity would be higher since “Hello” and “Hello words” have **semantic overlap**. |            |

---

Here’s the vector plot for the two sentences:

* The **blue arrow** represents “Hello” → `[1, 0]`
* The **orange arrow** represents “Hello words” → `[1, 1]`

You can see that they start at the same origin and form an **angle of 45°**, leading to a **cosine similarity of cos(45°) = 0.707**.
That angle visually shows how adding an extra word (“words”) changes the direction — reducing similarity but still showing strong overlap.
