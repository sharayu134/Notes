### 1. Confusion Matrices vary by threshold

* In a binary classifier (e.g. logistic regression), you often get a **probability score** for each sample.
* To decide class labels, you choose a **threshold** (e.g. 0.5).
* Varying the threshold changes **True Positives, False Positives, True Negatives, False Negatives** → you’ll get different confusion matrices.
* You might want to examine performance across **all thresholds**, rather than just one.

### 2. ROC Curve

* **ROC curve** plots **True Positive Rate (TPR)** vs **False Positive Rate (FPR)** for different thresholds.

  * TPR = Sensitivity = TP / (TP + FN)
  * FPR = FP / (FP + TN)
* Each point on the ROC curve corresponds to one threshold.
* A “perfect” classifier would go to the top-left corner (TPR = 1, FPR = 0).
* The diagonal line (from bottom-left to top-right) is the “no-skill” line (random guessing).

### 3. AUC (Area Under the Curve)

* **AUC** is the **area under the ROC curve**.
* It gives a single scalar metric summarizing how good the classifier is across all thresholds.
* Higher AUC = generally better classification (i.e. you have high TPR and low FPR over many thresholds).
* AUC = 0.5 is baseline (no better than random).

### 4. Model Comparison using AUC

* Because AUC collapses threshold-level performance, it lets you compare two models **independent of threshold**.
* The model with higher AUC is “better” in the sense of ranking predictions (i.e. giving higher scores to positives vs negatives).

### 5. Caveats & Related Metrics

* ROC & AUC don’t directly consider **precision**; for imbalanced datasets, precision-recall curves are often more informative.
* The video also notes that sometimes data might not behave nicely (i.e. overlaps, noise) → so ROC / AUC interpretation needs care.
* Differences in class prevalence / cost of false positives vs false negatives might require choosing the “operating point” (threshold) carefully, rather than relying solely on AUC.

link youtube.com/watch?v=4jRBRDbJemM

Here's a breakdown of how to answer those key questions in a large-scale ML system design interview.

---

### ## 1. ROC/AUC vs. Precision-Recall (PR) / F1

This is one of the most common questions, and the answer almost always hinges on **class imbalance**.

* **Use ROC / AUC when:**
    * Your classes are **roughly balanced**.
    * You care equally about the performance on both the positive and negative classes.
    * The main goal is to measure the model's general ability to **discriminate** or **rank** cases. A high AUC (e.g., 0.9) means there's a 90% chance that the model will assign a higher probability to a randomly chosen positive sample than to a randomly chosen negative sample.

* **Use Precision-Recall (PR) / AUC-PR / F1 when:**
    * Your dataset is **highly imbalanced** (e.g., fraud detection, spam filtering, rare disease diagnosis).
    * You care significantly more about the **positive (minority) class**.
    * **Why?** In a highly imbalanced set (e.g., 99.9% negative, 0.1% positive), a model can get a near-perfect ROC curve by just being good at identifying negatives. The **False Positive Rate (FPR)**, which is the x-axis of the ROC curve, will be tiny even with many false positives, because the denominator (all true negatives) is so massive.
    * The **PR curve**  highlights the actual tradeoff. It answers: "Out of all the times we *predicted* positive, how many were *actually* positive (Precision)?" This is crucial when the cost of a False Positive is high.
    * **F1 Score** is the harmonic mean of Precision and Recall. It's a useful single-number metric when you need to balance both, especially for choosing a specific threshold on an imbalanced dataset.

**Key interview line:** "ROC/AUC can be misleadingly optimistic on highly imbalanced data. In those cases, I always check the Precision-Recall curve because it gives a more realistic picture of performance on the minority class we actually care about."

---

### ## 2. Threshold Selection

**Interview Question:** "Once I have probability outputs, how do I pick a cutoff?"

Your answer should focus on **business goals and the cost of errors**.

1.  **It's a Business Decision, Not Just a Model Decision:** The default 0.5 threshold is almost never the right choice in a real system. The threshold is a *knob* you turn to balance two competing business needs.
2.  **Explain the Tradeoff (TP vs. FP):**
    * **Lowering the Threshold** (e.g., from 0.5 to 0.3): You increase **Recall** (True Positives). You catch more "positives" (e.g., more fraud, more cancers).
        * **The Cost:** You also increase **False Positives** (e.g., more legitimate transactions blocked, more healthy patients flagged for unnecessary, costly tests).
    * **Raising the Threshold** (e.g., from 0.5 to 0.8): You increase **Precision**. When your model *does* predict "positive," it's very likely to be correct.
        * **The Cost:** You decrease **Recall** and increase **False Negatives** (e.g., you miss more fraud, you fail to diagnose sick patients).

3.  **How to Pick the Threshold:**
    * **Method 1: Business-Driven (Best):** Ask the product manager, "What's the cost of a False Positive vs. a False Negative?"
        > * **Spam Filter:** A False Positive (a real email goes to spam) is *much worse* than a False Negative (a spam email gets through). Therefore, you need **high precision**. You'd pick a **high threshold**.
        > * **Medical Screening:** A False Negative (missing a real disease) is *catastrophic*. A False Positive (flagging a healthy person for more tests) is acceptable. Therefore, you need **high recall**. You'd pick a **low threshold**.
    * **Method 2: Metric-Driven (Good):** Use a curve to find the "sweet spot."
        * **ROC Curve:**  You can pick the threshold that gives the point closest to the top-left corner (0 FPR, 1 TPR), which is a good balance.
        * **PR Curve:** You might have a requirement like, "We need at least 90% Precision." You'd look at the PR curve, find the point where Precision is 0.9, and select the threshold that gives the highest Recall at that point.
        * **F1 Score:** You can plot the F1 score for all possible thresholds and pick the threshold that **maximizes the F1 score**.

---

### ## 3. Comparing Models (e.g., Accuracy vs. AUC)

**Interview Question:** "Model A has 95% accuracy, but Model B has 92% accuracy and a higher AUC. Which do you prefer?"

**Answer:** **Almost always Model B (higher AUC).**

* **Accuracy is a "snapshot" metric:** It only tells you the performance at *one specific threshold* (usually 0.5). That high 95% accuracy for Model A might be an illusion. If the dataset is 94% negative, a model that just predicts "negative" every time gets 94% accuracy, but it's a useless model with an AUC of 0.5 (random chance).
* **AUC is a "holistic" metric:** It measures the model's performance across *all possible thresholds*. A higher AUC means Model B is fundamentally better at separating the classes.
* **The Strategy:** You choose Model B because it's the **stronger, more robust classifier**. You then use the threshold-selection techniques (from point 2) to *tune* Model B to meet your business needs. You can likely find a threshold for Model B that *also* beats Model A on accuracy, or more importantly, on the *business metric* you actually care about (like precision or recall).

---

### ## 4. System Implications

This connects the metrics to the real-world system.

* **Cost of Errors:** In a large system (e.g., content moderation), a 0.1% False Positive rate could mean 10,000 legitimate posts are incorrectly deleted per day. This has a huge operational cost (user appeals, bad press). Your choice of metric (e.g., prioritizing *extremely* high precision) and threshold directly impacts this.
* **Operational Thresholds:** The threshold shouldn't be static. A good system design exposes the threshold as a **configurable parameter**.
    * **Example:** For a recommendation system, you might *lower* the threshold (show more items, favoring recall) during a holiday sale to maximize exposure. You might *raise* it (show only high-confidence items, favoring precision) during normal traffic.
    * A high-AUC model gives you this flexibility to "dial" the system's behavior up or down without retraining.
* **Distribution Shifts:** If your data changes (e.g., a new type of spam appears), a model with a high AUC is more likely to be robust. Its *ranking* may still be good. You might only need to adjust the *threshold* in production to adapt, which is much faster and cheaper than a full retrain.

---

### ## 5. Edge Cases and Pitfalls (When AUC is Misleading)

* **Pitfall 1: Extreme Imbalance.** As mentioned, ROC/AUC is misleadingly high. **Always use the PR curve** as your primary guide in these cases.
* **Pitfall 2: You Only Care About the "Top K".**
    * **Example:** A search engine or a "Top 10" recommendation list.
    * You don't care about the model's ranking ability for items it would rank #1,000,000. You *only* care about the quality of the top few results.
    * In this case, AUC is the wrong metric. You should use **ranking-specific metrics** like **Precision@K**, **Recall@K**, or **nDCG** (Normalized Discounted Cumulative Gain).
* **Pitfall 3: Uncalibrated Probabilities.**
    * AUC only measures *ranking*. A model can have a perfect AUC of 1.0 but be poorly calibrated.
    * **Example:** A model predicts 0.6 for all positives and 0.4 for all negatives. The ranking is perfect (AUC=1.0), but the probabilities are useless.
    * **Why it matters:** If a downstream system uses this probability to calculate an *expected value* (e.g., $Expected Ad Revenue = p(\text{click}) \times \text{value}$), the poorly calibrated 0.6 probability will make the calculation completely wrong.
    * **Solution:** You must *also* check for **probability calibration** (e.g., using a reliability diagram) and potentially add a calibration step (like Platt Scaling) to your model before deployment.

