* represent words as numbers, specifically vector
* vectors are scalers with direction, In scalar if sofa is 6ft from me then the distance is 6ft but in case of vector need to specify the director, vector can provide context to the number
* distance and direction between words can give us similarity
* In order to machine learning model to understand the word we convert it to number
* <img width="401" alt="image" src="https://github.com/user-attachments/assets/ccc23c72-3381-4d66-bed1-4cfa134f8630" />
* here happy and sad have opposite direction and apple-oranges have similar values
Here are the notes summarizing the key points from the video on word embeddings:

### Overview of Word Embeddings
- **Definition**: Word embeddings represent words as numeric vectors, capturing semantic relationships and contextual information.
- **Purpose**: Transforming words into numbers is necessary because machine learning algorithms require numerical input to process text.

### Applications of Word Embeddings in NLP
- **Text Classification**: Used in tasks like spam detection and topic categorization.
- **Named Entity Recognition (NER)**: Identifies and classifies entities (e.g., names of people, places, organizations).
- **Word Similarity and Analogy**: Helps in tasks like finding relationships (e.g., "king is to queen as man is to woman").
- **Question and Answer Systems**: Measures semantic similarities for clustering related articles or recommending similar items.

### Creation of Word Embeddings
- **Training on Large Corpora**: Models are trained on extensive text data (e.g., Wikipedia).
- **Preprocessing**: Involves tokenization, removing stopwords, and punctuation.
- **Context Window**: A sliding window identifies target and context words to learn relationships.
- **Training Process**: Adjusts model parameters to minimize prediction errors, positioning similar words close in vector space.

### Example of Word Representation
- **Small Corpus Example**: Illustrates how words are represented as vectors in a 3D space, showing proximity for similar meanings (e.g., "apple" and "orange").

### Approaches to Word Embedding Methods
1. **Frequency-Based Embeddings**:
   - **Concept**: Derived from word frequency in a corpus.
   - **Example**: TF-IDF (Term Frequency-Inverse Document Frequency) emphasizes words frequent in specific documents but rare across the corpus.

2. **Prediction-Based Embeddings**:
   - **Concept**: Capture semantic relationships and context.
   - **Example**: Models learn associations (e.g., "dog" with "bark," "wag," "tail") to create a fixed representation encompassing various meanings.

### Popular Models for Word Embeddings
- **Word2Vec** (developed by Google, 2013):
  - **Architectures**: 
    - **CBOW (Continuous Bag of Words)**: Predicts a target word based on surrounding context.
    - **Skip-Gram**: Predicts context words given a target word.
  
- **GloVe (Global Vectors for Word Representation)** (Stanford University, 2014):
  - Uses co-occurrence statistics to create word vectors, analyzing how often words appear together across the corpus.

### Advances in Word Embeddings
- **Transformers and Contextual-Based Embeddings**:
  - Unlike traditional embeddings that assign a fixed vector to each word, contextual embeddings change based on surrounding context.
  - Example: The word "bank" has different meanings in "going to the bank" vs. "sitting on the bank of a river."

### Conclusion
- Word embeddings have revolutionized NLP by transforming words into numbers, enabling machines to better understand and process human language.
