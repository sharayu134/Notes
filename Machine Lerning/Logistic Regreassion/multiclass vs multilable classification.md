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
