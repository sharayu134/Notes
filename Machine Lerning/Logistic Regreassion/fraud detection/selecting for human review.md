Selecting which transactions to send for human review is an optimization problem: **How do you get the maximum value (fraud caught + model improvement) from a limited budget of human hours?**

If you only review the "High Risk" transactions, your model enters a feedback loop where it never learns about the fraud it missed.

Here is a strategy for selecting post-model samples for review, categorized by the **goal** of the review.

### 1\. The "Portfolio" Allocation Strategy

Do not use a single sampling method. Instead, allocate your analysts' daily capacity (e.g., 1,000 reviews/day) into specific buckets.

| Bucket Name | % Allocation | Goal | Sampling Method |
| :--- | :--- | :--- | :--- |
| **The Firewall** | 60-70% | Stop immediate fraud. | **Top-k Sampling:** The highest risk scores (e.g., top 1%). |
| **The Teacher** | 20% | Improve the model. | **Uncertainty Sampling:** Scores near the decision boundary (e.g., 40-60%). |
| **The Auditor** | 5-10% | Quality Assurance (QA). | **Stratified Random:** Random selection from low/medium risk. |
| **The Explorer** | 5-10% | Find new fraud types. | **Diversity/Cluster Sampling:** Outliers that don't fit any known cluster. |

-----

### 2\. Deep Dive: Sampling Techniques

#### **A. Uncertainty Sampling (For Model Improvement)**

This is the most efficient way to make your model smarter.

  * **The Concept:** If the model predicts a transaction as 99% fraud, it "knows" what it is looking at. Reviewing it adds little *new* information. If it predicts 51%, it is confused.
  * **The Method:** Select samples where the probability $P$ is closest to your threshold (e.g., 0.5).
  * **Value:** Human labels here clarify the "gray area," sharpening the decision boundary for future predictions.

#### **B. Stratified "Below-the-Line" Sampling (For Finding False Negatives)**

This is the only way to catch "invisible" fraud.

  * **The Problem:** Most systems never review transactions scored as "Safe" (e.g., \< 10% risk). This creates a "blind spot" where sophisticated fraudsters hide.
  * **The Method:**
      * Divide the "Safe" population into bands: Very Low (0-10%), Low (10-30%), Medium (30-50%).
      * Randomly select 50-100 transactions from *each* band daily.
  * **Metric to Watch:** If you find fraud in the "Very Low" band, your model has a critical feature gap.

#### **C. Diversity / Cluster-Based Sampling**

Avoid wasting time reviewing 50 examples of the exact same attack.

  * **The Problem:** If a bot attack hits, you might get 1,000 alerts that look identical. Reviewing all 1,000 is a waste of resources.
  * **The Method:**
    1.  Run a clustering algorithm (like K-Means) on the flagged transactions.
    2.  Select the **Centroid** (the most representative example) from each cluster for review.
    3.  **Bulk Action:** If the Centroid is confirmed as fraud, apply the label to the entire cluster automatically.

#### **D. Adversarial Sampling**

Look for transactions that are "trying" to trick the model.

  * **The Method:** Select transactions that have high risk *signals* but a low final *score*.
      * *Example:* A transaction with "High Velocity" (Bad) but "Trusted Device" (Good).
  * **Why:** These are often Account Takeovers (ATO) where the fraudster is using a stolen trusted device to bypass checks.

-----

### 3\. Intelligent Routing (Who reviews what?)

Don't treat all analysts equally. Route samples based on difficulty.

  * **Junior Analysts:** Assign **Top-k (High Risk)** samples. These are usually obvious fraud (easy wins) and good for training new staff.
  * **Senior Analysts:** Assign **Uncertainty** and **Adversarial** samples. These require deep investigation and intuition to label correctly.
  * **The "Gold Set":** Every day, sneak 10 known "ground truth" cases (5 fraud, 5 legit) into the queue without telling the analysts. Use this to measure their accuracy and consistency.

### 4\. Implementation: The "Review Decision" Logic

Here is a pseudo-code logic for your sampling pipeline:

```python
def select_samples_for_review(transactions, capacity=1000):
    samples = []
    
    # 1. Top Risk (Catching the bad guys) - 60%
    high_risk = transactions.sort_by('score', descending=True).top(600)
    samples.extend(high_risk)
    
    # 2. Uncertainty (Teaching the model) - 20%
    # Filter for scores between 0.4 and 0.6
    uncertain = transactions.filter(score__range=(0.4, 0.6)).sample(200)
    samples.extend(uncertain)
    
    # 3. Random Audit (Checking the 'safe' pile) - 10%
    # Filter for scores < 0.1
    safe_audit = transactions.filter(score__lt=0.1).sample(100)
    samples.extend(safe_audit)
    
    # 4. Diversity (New patterns) - 10%
    # Cluster the remaining high-risk items and pick 1 from each cluster
    outliers = cluster_and_pick_centroids(transactions.exclude(samples), n=100)
    samples.extend(outliers)
    
    return samples
```

**Would you like me to detail how to set up the "Gold Set" (Control Group) to measure the performance of your human reviewers?**
