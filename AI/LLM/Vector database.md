* mathematical representation of structured and unstructured data
* these representation of data is easily understandable by machine learning models
* when we query vector database we will get embeddings of relavent data
* this data is fed to LLM which will provide output


### **🔍 How Does Vector Search Work?**  

Vector search is a method used to **find similar items** based on their vector representations. Instead of relying on traditional keyword matching (like in relational databases), vector search finds **semantic similarities** between data points.  

---

## **🧩 Step-by-Step Process of Vector Search**
### **1️⃣ Convert Data into Vectors (Embeddings)**
- Raw data (e.g., text, images, audio, user behavior) is **converted into numerical vectors** using an embedding model.
- Examples of embedding models:
  - **Text**: OpenAI, BERT, Sentence Transformers  
  - **Images**: CLIP, ResNet  
  - **Audio**: Wav2Vec, DeepSpeech  

#### **Example**
📜 **Text Input:** `"Paris is a beautiful city"`  
➡ **Embedding Output (Vector Representation):**  
```
[0.12, -0.34, 0.87, ..., 0.05]  (768 dimensions)
```

---

### **2️⃣ Store Vectors in a Vector Database**
- The generated vectors are stored in a **vector database** (e.g., Qdrant, Pinecone, Weaviate, FAISS).
- Each vector is associated with **metadata** (e.g., document ID, image URL, product details).

---

### **3️⃣ Perform a Vector Search**
- When a user provides a **query** (e.g., "Best places in France"), it is **converted into a vector**.
- The database **compares this vector** to stored vectors using a similarity metric.

---

### **4️⃣ Compute Similarity Using Distance Metrics**
- **Similarity is measured using distance functions:**
  1. **Cosine Similarity** (measures angle between vectors)  
  2. **Euclidean Distance** (measures straight-line distance)  
  3. **Dot Product** (measures magnitude and direction)

#### **Example: Cosine Similarity Formula**
\[
\text{similarity} = \frac{A \cdot B}{||A|| \times ||B||}
\]
Where:
- \(A\) = Query vector  
- \(B\) = Stored vector  

If similarity **≈ 1**, the vectors are **very similar**.  

---

### **5️⃣ Return the Most Relevant Results**
- The **top N results** with the highest similarity scores are returned.
- These results are typically sorted in **descending order of similarity**.

#### **Example Search Results**
| Rank | Text / Image | Cosine Similarity |
|------|-------------|------------------|
| 1️⃣  | `"Eiffel Tower is a must-visit"` | **0.95** |
| 2️⃣  | `"Visit France for amazing architecture"` | **0.90** |
| 3️⃣  | `"Top tourist attractions in Paris"` | **0.85** |

---

## **🛠 Example: Running a Vector Search in Qdrant**
If you have text embeddings stored, you can perform a search like this:

### **🔹 Query Example**
```json
{
  "vector": { "text_embedding": [0.12, -0.34, 0.87, ..., 0.05] },
  "top": 5
}
```
➡ This will return **top 5 most relevant results** based on similarity.

---

## **🚀 Why Use Vector Search?**
✅ **Finds semantic matches** – Works better than keyword search  
✅ **Handles multi-modal data** – Supports text, images, audio, and more  
✅ **Fast & Scalable** – Optimized for large datasets with millions of vectors  
✅ **Improves recommendations** – Used in search engines, chatbots, and personalization  

To see the detailed query run 
```
docker pull qdrant/qdrant
docker run -p 6333:6333 -p 6334:6334 \
    -v $(pwd)/qdrant_storage:/qdrant/storage:z \
    qdrant/qdrant
```
