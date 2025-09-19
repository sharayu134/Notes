<img width="491" height="263" alt="image" src="https://github.com/user-attachments/assets/f5d7707e-67f3-4215-a1ed-d075f443560f" />
<img width="594" height="220" alt="image" src="https://github.com/user-attachments/assets/62e2e50a-0f42-4631-aa3f-c68e6ef719ef" />
<img width="594" height="300" alt="image" src="https://github.com/user-attachments/assets/6a681466-f0f2-4644-867d-d1644299f113" />


# Types 


<img width="781" height="459" alt="image" src="https://github.com/user-attachments/assets/0c57a1b8-0fca-4f55-8757-714d142dbacb" />
<img width="781" height="459" alt="image" src="https://github.com/user-attachments/assets/1851927c-67c2-4fd9-9876-5ecea1741b0b" />
<img width="781" height="459" alt="image" src="https://github.com/user-attachments/assets/13295988-6158-472e-aef3-8d744621e36b" />
<img width="781" height="459" alt="image" src="https://github.com/user-attachments/assets/6d4fb368-e9d4-4f5d-b5b0-cf8ab37a1d8a" />


# Model and Data Feature

<img width="781" height="459" alt="image" src="https://github.com/user-attachments/assets/cbe4fd96-9d4d-4225-a882-f300a387e01f" />

<img width="781" height="459" alt="image" src="https://github.com/user-attachments/assets/f81f961b-b972-4ba0-8afe-80a7499cae9e" />

<img width="781" height="459" alt="image" src="https://github.com/user-attachments/assets/de52ae10-22e4-4b28-8ad6-7225481cc6fb" />

<img width="781" height="459" alt="image" src="https://github.com/user-attachments/assets/3faca632-562a-484a-9758-7984bc755ed0" />

<img width="781" height="459" alt="image" src="https://github.com/user-attachments/assets/310c3f09-dda7-4204-bb1f-3559a3a69500" />

<img width="781" height="459" alt="image" src="https://github.com/user-attachments/assets/69eb13a7-33b6-48b7-9d5d-55745ad1d6b6" />

<img width="449" height="209" alt="image" src="https://github.com/user-attachments/assets/b73758ed-a56f-40f0-9617-9a6d383c108e" />

<img width="913" height="357" alt="image" src="https://github.com/user-attachments/assets/a5c2fbcc-2f52-4fb7-a231-d0e9abde774d" />

<img width="913" height="357" alt="image" src="https://github.com/user-attachments/assets/803e4539-803b-4012-a836-6bd7bc84ee78" />
# Supervised Learning 
Great question! Let’s break this down so you can give a **clear, interview-ready answer**.

---

## How to Answer "What is Supervised Learning?"

**Definition (Concise):**
Supervised learning is a type of machine learning where the model is trained on labeled data — meaning the input comes with the correct output. The algorithm learns a mapping from inputs (features) to outputs (labels) so it can predict unseen data.

---

## Example You Should Give

In interviews, **real-world, intuitive examples** work best. A safe and strong one is:

* **Spam Email Classification**

  * Input: Features of an email (subject line, sender, text content, links).
  * Output: Label (`spam` or `not spam`).
  * The model learns from a dataset of emails that are already labeled as spam/not spam, and applies that knowledge to classify new emails.


* **House Price Prediction**

  * Input: Features of a house (square footage, location, number of rooms).
  * Output: Label (numeric value = price).
  * The model learns the relationship between features and price, then predicts price for new houses.

---

## Why These Examples Work in Interviews

* **Spam classification** shows a **classification** problem.
* **House price prediction** shows a **regression** problem.
* Together, they demonstrate that you understand supervised learning covers both **classification and regression** tasks.

---

✅ **Interview Tip:** After giving the example, briefly add:

> “Supervised learning is important in ML system design because most practical ML systems—like recommendation engines, fraud detection, and search ranking—are based on supervised learning with large amounts of labeled data.”

Absolutely! Let’s craft an **interview-ready breakdown** for **unsupervised learning**, just like we did for supervised.

---

##  "What is Unsupervised Learning?"

**Definition (Concise):**
Unsupervised learning is a type of machine learning where the model is trained on **unlabeled data**. The system tries to find hidden patterns, structures, or groupings in the data without predefined outputs.


1. **Customer Segmentation**

   * Input: Purchase history, browsing behavior, demographics of customers.
   * Output: No labels, but the algorithm clusters customers into groups (e.g., high-value vs. casual shoppers).
   * Companies then use these groups for targeted marketing.

2. **Market Basket Analysis (Association Rules)**

   * Input: Shopping carts with lists of items bought together.
   * Output: Discovered patterns like “People who buy bread and butter also often buy jam.”
   * Used for recommendation systems and store layout optimization.

---

✅ **Interview Tip:** After the example, you can add:

> “Unsupervised learning is critical in ML system design because it helps when labeled data is scarce. It’s often the first step for understanding data structure, reducing dimensionality, or creating features that later feed into supervised systems.”


## How to Answer "What is Reinforcement Learning?"

**Definition (Concise):**
Reinforcement learning is a type of machine learning where an agent learns to make decisions by interacting with an environment. Instead of being given correct answers, it receives feedback in the form of **rewards or penalties** and aims to maximize cumulative reward over time.

---

## Key Components to Mention (Interview-Friendly)

* **Agent** – the learner/decision maker.
* **Environment** – where the agent acts.
* **Actions** – choices the agent can take.
* **State** – the current situation of the environment.
* **Reward** – feedback signal for good/bad actions.

---

## Example You Should Give


1. **Self-driving Car**

   * Agent: the car.
   * Environment: the road.
   * Actions: accelerate, brake, turn.
   * Reward: staying safe, following traffic rules, reaching destination quickly.

2. **Game Playing (like Chess or Atari)**

   * Agent: the player (AI).
   * Environment: the game.
   * Actions: moves made in the game.
   * Reward: winning the game (or points scored).

---

## Intuitive Analogy

It’s like **training a dog**:

* When the dog does the right thing, you give a treat (reward).
* When it does something wrong, no treat or a scolding (penalty).
* Over time, it learns which behaviors maximize treats.

---

## Why This Matters in Interviews

* Shows you know RL is **different from supervised/unsupervised**: no labeled data, but feedback from actions.
* In **ML system design interviews**, you can connect RL to **real-world systems**:

  * Online ad placement (maximizing click-through rate).
  * Recommendation systems (optimizing long-term engagement).
  * Robotics (learning to walk, grasp objects).

---

✅ **Crisp Interview Answer (Memorizable):**

> “Reinforcement learning is when an agent learns by interacting with an environment and receiving rewards or penalties for its actions. The goal is to maximize long-term reward. For example, a self-driving car uses RL to learn how to accelerate, brake, or turn in order to reach its destination safely and efficiently.”

---

Do you want me to also prepare a **side-by-side comparison of supervised vs. unsupervised vs. reinforcement learning**? That’s a common follow-up interview question.

# Classification - Supervised


<img width="913" height="357" alt="image" src="https://github.com/user-attachments/assets/08caa53c-8c22-46ef-905b-69c06cc12850" />

<img width="913" height="357" alt="image" src="https://github.com/user-attachments/assets/5dff1eac-3cb3-4af4-9517-82a2c459e6ba" />

<img width="913" height="357" alt="image" src="https://github.com/user-attachments/assets/265ba066-bbfb-4b65-97f5-8ba905257f01" />

# Regressoin - Supervised 

<img width="913" height="357" alt="image" src="https://github.com/user-attachments/assets/cb5ebba6-090e-4aac-b7c7-53b6b2340ab4" />

# Supervised learning Dataset

<img width="913" height="506" alt="image" src="https://github.com/user-attachments/assets/6eff3706-e19f-40ab-94b2-03baeb4b759f" />

<img width="913" height="506" alt="image" src="https://github.com/user-attachments/assets/854f5b44-26fb-4c58-82f4-d6a2619355ec" />

<img width="913" height="506" alt="image" src="https://github.com/user-attachments/assets/b11f18a5-ce7c-4272-af30-8ae86d0426a5" />

<img width="913" height="506" alt="image" src="https://github.com/user-attachments/assets/63957e97-2a02-4766-b08d-63640e3ddc2a" />

<img width="913" height="506" alt="image" src="https://github.com/user-attachments/assets/260a429f-4a91-420e-8056-f91ff0d99835" />

<img width="913" height="506" alt="image" src="https://github.com/user-attachments/assets/bc9ef6ef-7ecb-4c5f-a218-148b66a0faaa" />

<img width="913" height="506" alt="image" src="https://github.com/user-attachments/assets/9e79de86-f7af-4a06-b3f8-f11be0f6831f" />

<img width="573" height="506" alt="image" src="https://github.com/user-attachments/assets/4be44740-6fdf-4204-8447-e1e61e07c760" />

<img width="889" height="506" alt="image" src="https://github.com/user-attachments/assets/5b383a9f-210a-478b-9fd3-2fc8c9e2d0c1" />

# Loss is how far is prediction from real result

<img width="889" height="506" alt="image" src="https://github.com/user-attachments/assets/293e8f53-8082-4621-b44e-07d71cf8df41" />

<img width="889" height="506" alt="image" src="https://github.com/user-attachments/assets/72598eca-e81f-4777-88f4-d1147ffa4675" />

<img width="889" height="506" alt="image" src="https://github.com/user-attachments/assets/6329c941-faf8-4b46-84ac-e49d549e8411" />

<img width="889" height="506" alt="image" src="https://github.com/user-attachments/assets/778def7f-419b-4d46-b18c-17fcbc041664" />

<img width="889" height="506" alt="image" src="https://github.com/user-attachments/assets/90e76137-2be8-48f0-a4b1-1416ad0baaa7" />
# Accuracy is how much the model is correct 

<img width="732" height="506" alt="image" src="https://github.com/user-attachments/assets/e196e68f-e5e0-4af9-a9a7-20c996b8443d" />
