Dense retrieval models are trained to map text to meaningful vector representations and are then used to find relevant documents for a given query by searching for the closest vectors in that learned space. Here's a breakdown of how they are trained and used:

### How Dense Retrieval Models Are Trained

The core idea behind training a dense retrieval model is to learn a function that places vectors of similar (e.g., a question and its answer) text close together in a high-dimensional space, while pushing dissimilar text vectors far apart. This is typically achieved through a **dual-encoder architecture** and a process called **contrastive learning**.

Here's a step-by-step look at the training process:

1.  **Dual-Encoder Architecture:** The model consists of two separate encoders (often based on Transformer models like BERT), one for the query and one for the document or passage.
    * **Query Encoder:** Takes a query as input and outputs a single dense vector representation (embedding).
    * **Document/Passage Encoder:** Takes a document or a passage of text as input and outputs its corresponding dense vector embedding.

    Initially, these encoders can be pre-trained language models. The training process then fine-tunes them for the specific task of retrieval.

2.  **Preparing Training Data:** To train the model, you need a dataset of `(query, positive_passage)` pairs. A "positive passage" is a document that is considered a relevant answer or match for the given query.

3.  **The Role of Negative Samples:** For the model to learn to differentiate between relevant and irrelevant documents, it also needs to be shown "negative" examples. These are passages that are *not* relevant to the query. There are a few common strategies for selecting negative samples:
    * **In-batch Negatives:** This is a very efficient method where for a given query in a training batch, all the other passages in that same batch are treated as negative samples.
    * **Hard Negatives:** These are passages that are lexically similar to the query (i.e., they share many of the same keywords) but are not semantically relevant. These are "hard" because they are more difficult for the model to distinguish from the positive passage, forcing it to learn a deeper semantic understanding. Hard negatives can be mined using traditional retrieval systems like BM25.

4.  **Contrastive Loss:** The model is trained using a contrastive loss function. The goal of this loss function is to:
    * **Maximize** the similarity score (e.g., dot product or cosine similarity) between the query vector and the positive passage vector.
    * **Minimize** the similarity score between the query vector and all the negative passage vectors.

    By optimizing this loss, the model learns to pull the representations of queries and their relevant passages closer together in the vector space while pushing apart the representations of queries and irrelevant passages.

5.  **Iterative Refinement:** This process is repeated over many batches of training data. The parameters of both the query and document encoders are updated through backpropagation to minimize the contrastive loss.

### How Dense Retrieval Models Are Used

Once the dense retrieval model is trained, it can be used to build a semantic search system. The process generally involves two main phases: indexing and retrieval.

#### 1. Indexing (Offline Process)

Before any searches can be performed, you need to create a searchable index of your document collection.

* **Embedding the Corpus:** Every document or passage in your entire collection is passed through the trained **document encoder** to generate a dense vector embedding for each one.
* **Storing in a Vector Database:** These embeddings are then stored and indexed in a specialized **vector database** (like Faiss, Milvus, or ScaNN). Vector databases are optimized for efficiently searching through millions or even billions of vectors to find the nearest neighbors to a given query vector.



#### 2. Retrieval (Online Process)

When a user submits a search query, the following happens in real-time:

* **Embedding the Query:** The user's query is fed into the trained **query encoder** to produce a dense vector embedding for the query.
* **Similarity Search:** This query vector is then used to search the vector database. The database performs a similarity search (typically an Approximate Nearest Neighbor search for speed) to find the document vectors that are closest to the query vector in the embedding space.
* **Returning the Results:** The system then retrieves the original documents corresponding to these top-k most similar vectors and presents them to the user as the search results.

In essence, the "search" becomes a geometric problem of finding the nearest points in a high-dimensional space. This is why dense retrieval is so powerful for semantic search—it finds documents that are semantically related in meaning, not just those that share the same keywords.
A contrastive loss function is a type of distance metric learning that teaches a model to distinguish between similar and dissimilar data points. The fundamental idea is to pull "positive pairs" (similar items) closer together in an embedding space while pushing "negative pairs" (dissimilar items) farther apart. This is particularly useful in self-supervised learning where explicit labels are unavailable.

Here are a few key contrastive loss functions:

### Triplet Loss

Triplet loss is a classic contrastive loss function that works with three data points at a time:

* **Anchor (`A`)**: The reference data point.
* **Positive (`P`)**: A data point that is similar to the anchor.
* **Negative (`N`)**: A data point that is dissimilar to the anchor.

The goal is to ensure that the distance between the anchor and the positive is smaller than the distance between the anchor and the negative, plus a certain **margin (`α`)**.

The formula for triplet loss is:

$L(A, P, N) = \max(||f(A) - f(P)||_2^2 - ||f(A) - f(N)||_2^2 + \alpha, 0)$

Where:
* `f(x)` is the embedding of the input `x`.
* `||...||_2^2` is the squared Euclidean distance.
* `α` is the margin, a hyperparameter that enforces a minimum separation between the anchor-positive and anchor-negative pairs.

**How it works:** The loss is zero if the distance to the negative is greater than the distance to the positive by at least the margin. Otherwise, the loss is positive, and the model's weights are updated to push the negative further away.

### InfoNCE Loss (Noise Contrastive Estimation)

InfoNCE is a more modern and widely used contrastive loss function, particularly in self-supervised learning models like SimCLR. It generalizes the idea of triplet loss to a multi-class classification problem where there is one positive example and multiple negative examples.

The formula for InfoNCE loss for a single positive pair `(i, j)` is:

$L_{i,j} = -\log \frac{\exp(\text{sim}(z_i, z_j) / \tau)}{\sum_{k=1, k \neq i}^{N} \exp(\text{sim}(z_i, z_k) / \tau)}$

Where:
* `z_i` and `z_j` are the embeddings of the positive pair.
* `sim(u, v)` is the cosine similarity between vectors `u` and `v`.
* `τ` (tau) is the **temperature** hyperparameter, which controls the separation of the classes. A lower temperature leads to a greater separation.
* The denominator sums over all other `N-1` samples in the batch, which are treated as negatives.

**How it works:** This loss function is essentially a softmax cross-entropy loss. It tries to maximize the similarity of the positive pair while minimizing the similarity of all the negative pairs. The model is trained to correctly classify the positive sample among a set of noise (negative) samples.

### Supervised Contrastive Loss

This is an extension of the contrastive loss to a supervised setting where labels are available. In this case, instead of just one positive example (an augmented version of the same image), all examples from the same class are considered positive.

The formula for supervised contrastive loss is a modification of the InfoNCE loss:

$L_i = -\frac{1}{|P(i)|} \sum_{p \in P(i)} \log \frac{\exp(\text{sim}(z_i, z_p) / \tau)}{\sum_{k \in A(i)} \exp(\text{sim}(z_i, z_k) / \tau)}$

Where:
* `P(i)` is the set of all positives for sample `i` in the batch (i.e., all other samples with the same label).
* `A(i)` is the set of all other samples in the batch (positives and negatives).

**How it works:** For a given anchor, this loss function pulls all other samples of the same class closer and pushes away all samples from different classes. This allows the model to learn representations that are not only invariant to augmentations but also cluster well according to their class.
