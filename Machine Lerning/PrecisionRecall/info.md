<img width="985" height="773" alt="image" src="https://github.com/user-attachments/assets/e76a3161-b063-442b-92df-86a95b67fe21" />

Precision: Of all the listings our model flagged as fraudulent, what percentage were actually fraudulent? High precision means fewer false positives.

Recall: Of all the truly fraudulent listings, what percentage did our model successfully flag? High recall means fewer false negatives.

Accuracy is a poor choice due to the data imbalance. 
Recall: Of all the truly fraudulent listings, what percentage did our model correctly identify as fraudulent? This is what we want to maximize to avoid missing fraud.

Precision: Of all the listings our model predicted as fraudulent, what percentage were actually fraudulent?


The F1-score is a single metric that combines **precision** and **recall** into a single number. It is the **harmonic mean** of precision and recall.

---

### Precision vs. Recall: A Quick Refresher

* **Precision** answers the question: "Of all the positive predictions our model made, how many were actually correct?" It focuses on the quality of positive predictions and is concerned with **false positives** (predicting something is positive when it's not).
* **Recall** answers the question: "Of all the actual positive cases, how many did our model correctly identify?" It focuses on the model's ability to find all positive instances and is concerned with **false negatives** (missing a positive case).

These two metrics often have an **inverse relationship**. A model can achieve very high recall by simply classifying everything as positive, but its precision would be very low. Conversely, a model can achieve high precision by being very conservative and only predicting a positive outcome when it's extremely sure, but it would miss many actual positive cases, resulting in low recall.

---

### Why the F1-Score is Needed ⚖️

You need the F1-score because relying on precision and recall alone can be misleading, especially in a common scenario called **class imbalance**.

Imagine a model designed to detect a rare disease that affects only 1% of the population. A simple model could just predict that no one has the disease.

* **Accuracy:** This model would have 99% accuracy, which seems fantastic.
* **Precision:** Precision would be undefined or 0, because it never makes a positive prediction.
* **Recall:** Recall would be 0, as it completely fails to identify any of the sick people.

This example highlights the **limitations of using a single metric**. A model with 99% accuracy is useless in this case. Precision and recall tell a more nuanced story, but they present a trade-off.

The F1-score provides a solution by giving a balanced measure of a model's performance. It's particularly valuable when:

1.  **There's a trade-off between precision and recall**: The F1-score helps you find a model that performs well on both metrics simultaneously.
2.  **You have imbalanced classes**: The F1-score penalizes models that favor one metric heavily at the expense of the other, giving you a more honest evaluation of a model's performance on the minority class.

The F1-score is calculated using the harmonic mean, which is a type of average that gives more weight to lower values. This ensures that a model can't get a high F1-score unless both its precision and recall are reasonably high. The formula is:

$$F1 = 2 \times \frac{Precision \times Recall}{Precision + Recall}$$
