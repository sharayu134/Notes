Here's a breakdown of the questions you can expect in a machine learning system design interview, organized by the type of problem you're asked to solve.

These questions are intentionally open-ended. They aren't testing for a single "correct" answer but rather for your ability to **structure a complex problem, identify trade-offs, and design a practical, end-to-end system.**

---

## 🏛️ The 4 Main Types of ML System Design Questions

Most questions fall into one of these four categories. I'll provide common examples for each.

### 1. Recommendation & Personalization
These are the most common questions. They focus on building systems that surface relevant content or products to individual users.

* **"Design a YouTube/TikTok video recommendation system."**
* **"Design Spotify's 'Discover Weekly' playlist."**
* **"Design a 'People You May Know' feature for LinkedIn or Facebook."**
* **"Design an e-commerce 'products you might like' feature for Amazon."**
* **"Design a personalized news feed for an app like Google News."**

**What they're testing:** Your understanding of collaborative filtering vs. content-based filtering, handling the "cold start" problem (new users or new items), generating candidate recommendations, and ranking them (as we discussed before).

### 2. Search & Ranking
These questions are about ordering a large set of possible results in response to a user's query.

* **"Design the ranking for Amazon's product search."**
* **"Design a search engine for tweets on Twitter/X."**
* **"Design a visual search system for Pinterest (i.e., 'find similar images')."**
* **"Design a restaurant ranking system for Google Maps or Yelp."**

**What they're testing:** Your knowledge of information retrieval, Learning to Rank (LTR), feature engineering (e.g., query features, item features, user-item features), and multi-stage ranking (a "candidate generation" step to find 1000s of items, followed by a "ranking" step to sort the top 100).

### 3. Detection & Moderation
These questions involve building classifiers to identify and handle specific types of content or behavior in real-time.

* **"Design a real-time fraud detection system for Stripe or a credit card company."**
* **"Design a system to detect and remove hate speech/spam/fake news from Facebook."**
* **"Design a system to detect duplicate questions on Quora."**
* **"Design a copyright-infringement detection system for YouTube (Content ID)."**

**What they're testing:** Your ability to handle **imbalanced data** (fraud/hate speech is rare), the trade-off between **precision and recall** (is it worse to block a good user or miss a bad one?), and the need for **low-latency** (real-time) predictions.

### 4. Other (e.g., Predictions, Ads, CV/NLP)
This is a catch-all for other common business applications.

* **Pricing/Prediction:** "Design a dynamic pricing system for Uber or Airbnb."
* **Ads:** "Design a system for ad click-through rate (CTR) prediction."
* **Computer Vision:** "Design a system to blur faces and license plates for Google Street View."
* **NLP:** "Design a 'smart reply' feature for Gmail or LinkedIn."

---

## 🧭 How to Answer Any ML System Design Question

Regardless of the question, interviewers are looking for a structured approach. Don't just jump to the model. Use a framework like this:

### A 6-Step Framework for Your Answer

1.  **Problem Scoping & Clarification (Most Important Step!)**
    * **Goal:** What is the business objective? (e.g., "Increase user engagement," "reduce fraudulent transactions.")
    * **Scope:** Who are the users? How many? (e.g., 100 million users, 10,000 requests per second).
    * **Constraints:** What are the latency needs? (e.g., "Must be real-time < 200ms").
    * **Example Questions:** "Are we building this for new users or existing users?", "What's the scale of items?", "Does this need to be a real-time prediction or can it be a batch process?"

2.  **Data & Features**
    * **Data Collection:** What data can we get? (e.g., user clicks, watch time, purchase history, user profile, item metadata).
    * **Feature Engineering:** What features will you create? (e.g., `user_watch_time_past_7_days`, `item_category_embedding`, `ctr_of_item`).
    * **Data Storage:** How will you store and access this? (e.g., a feature store, a data warehouse).

3.  **Modeling**
    * **Problem Type:** Is this ranking, classification, or regression?
    * **Model Choice:** Start with a **simple baseline** (e.g., logistic regression, XGBoost) and then discuss a more complex model (e.g., a deep neural network).
    * **Candidate Generation (if needed):** How will you find a small set of *potential* good items from millions? (e.g., using embeddings and an Approximate Nearest Neighbor index).

4.  **Training**
    * **Labels:** How will you get "ground truth" labels? (e.g., "clicked" = 1, "not clicked" = 0; or explicit ratings).
    * **Cadence:** How often will you retrain the model? (e.g., daily, weekly, or online learning).
    * **Process:** Describe the training pipeline (e.g., "We will run a daily Spark job to generate features and train an XGBoost model").

5.  **Evaluation**
    * **Offline Metrics:** What metrics will you use to evaluate the model *before* deploying it?
        * **Ranking:** NDCG, MAP (as we discussed).
        * **Classification:** Precision, Recall, F1-score, AUC.
    * **Online Metrics:** How will you test it in production?
        * **A/B Testing:** This is the key answer. You will test your new model on 5% of users against the old model.
        * **Business Metrics:** What business KPIs will you track? (e.g., Click-Through Rate, Watch Time, Conversion Rate, Fraud $ Saved).

6.  **Deployment & Monitoring (The "System" Part)**
    * **Serving:** How will the model make predictions? (e.g., a REST API, a microservice). Will it be online (real-time) or batch (offline)?
    * **Monitoring:** What do you do *after* it's live?
        * **Model Monitoring:** Track for **data drift** (input data changes) and **concept drift** (user behavior changes).
        * **Health Monitoring:** Track latency, errors (QPS), and uptime.

Would you like to walk through a specific example, like "Design a YouTube Recommendation System," using this 6-step framework?
