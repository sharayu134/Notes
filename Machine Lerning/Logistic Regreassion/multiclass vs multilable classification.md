Multiclass and multilabel are two different types of classification problems in machine learning. The key distinction lies in the **mutually exclusive** nature of the classes.

### Multiclass Classification 
In multiclass classification, an instance can be assigned to **only one** class from a set of more than two classes. The classes are mutually exclusive, meaning an item cannot belong to more than one category at the same time. Think of it as a single-choice question with more than two options.

* **Example:** A model that classifies an image of a fruit as either an **apple**, a **banana**, or an **orange**. An image cannot be both an apple and a banana. 
* **Output:** The model outputs a single label.
* **Loss Function:** Often uses **Cross-Entropy**, which is designed for this single-choice scenario.
* **Final Layer Activation:** Typically uses the **softmax** function, which outputs probabilities that sum to 1. This ensures that the model's prediction is a single class with the highest probability.

***

### Multilabel Classification 
In multilabel classification, an instance can be assigned to **one or more** classes simultaneously. The classes are not mutually exclusive, so an item can belong to multiple categories at once. This is like a multiple-choice question where you can select one or more answers.

* **Example:** A model that tags a movie with genres. A single movie can be labeled as a **comedy**, a **drama**, and an **action** film all at once. 
* **Output:** The model outputs a set of labels.
* **Loss Function:** Usually uses **Binary Cross-Entropy**, as it treats each label as an independent binary classification problem (e.g., "is it an action movie?" "is it a drama?").
* **Final Layer Activation:** Uses the **sigmoid** function for each output node. This provides a probability for each label independently, allowing for multiple labels to be selected based on a chosen threshold.

### Summary Table

| Feature | Multiclass Classification | Multilabel Classification |
| :--- | :--- | :--- |
| **Number of Labels** | One per instance | One or more per instance |
| **Class Exclusivity** | Mutually exclusive | Not mutually exclusive |
| **Common Use Case** | Image classification (of single object), sentiment analysis (positive/negative/neutral) | Document tagging, object detection in images |
| **Final Layer Activation**| Softmax | Sigmoid (for each label) |
| **Loss Function** | Cross-Entropy | Binary Cross-Entropy |


One-vs-All, also known as **One-vs-Rest (OvR)**, is a strategy for extending binary classification algorithms to handle **multi-class classification** problems (where there are more than two classes). It works by breaking down a multi-class problem into a set of independent binary classification problems.

---

### How it Works 🧠

Let's say you have a dataset with three classes: Class A, Class B, and Class C. A binary classifier can only distinguish between two classes. The One-vs-All method solves this by creating a separate binary classifier for each class.

For each classifier, one class is treated as the **"positive" class**, and all the other classes are grouped together as the **"negative" class**.

1.  **Classifier 1 (Class A vs. All)**: This classifier is trained to distinguish between Class A (positive) and everything else (Class B and C, which are grouped as negative).
2.  **Classifier 2 (Class B vs. All)**: This classifier is trained to distinguish between Class B (positive) and everything else (Class A and C, which are grouped as negative).
3.  **Classifier 3 (Class C vs. All)**: This classifier is trained to distinguish between Class C (positive) and everything else (Class A and B, which are grouped as negative).



To make a prediction for a new data point, you pass it through all three of these classifiers. Each classifier outputs a **probability score** or a **confidence score** indicating how likely the data point belongs to its positive class. The final prediction is the class that receives the **highest score** among all the classifiers.

For example, if the scores are:
* Classifier 1 (A): 0.1
* Classifier 2 (B): 0.8
* Classifier 3 (C): 0.3

The model would predict **Class B**, because it had the highest confidence score.

---

### One-vs-All vs. One-vs-One

It's helpful to compare One-vs-All to another common strategy, **One-vs-One (OvO)**.

| Feature | One-vs-All (OvA) | One-vs-One (OvO) |
| :--- | :--- | :--- |
| **Number of Classifiers** | **N** (one for each class) | **N * (N - 1) / 2** (one for each pair of classes) |
| **Example (3 classes)** | 3 classifiers (A vs. B/C, B vs. A/C, C vs. A/B) | 3 classifiers (A vs. B, A vs. C, B vs. C) |
| **Prediction Method** | The class with the highest confidence score wins. | The class with the most "votes" from the classifiers wins. |
| **Training Data** | Each classifier is trained on the **entire dataset** (except for the target labels which are binarized). | Each classifier is trained only on the data points from its two classes. |
| **Pros** | Computationally efficient for a small number of classes; easy to interpret each classifier. | More robust to class imbalance problems; less training data per classifier. |
| **Cons** | Can suffer from class imbalance if one class is very rare; can be ambiguous if multiple classifiers give high scores. | Computationally expensive with a large number of classes. |
