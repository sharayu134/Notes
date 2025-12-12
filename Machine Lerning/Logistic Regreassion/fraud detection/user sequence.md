Using user temporal information transforms fraud detection from a static snapshot (e.g., "Is this transaction weird?") into a dynamic narrative (e.g., "Is this *sequence of events* weird?").

Here is a guide on how to engineer, model, and deploy temporal user action sequences for fraud detection.

-----

### 1\. Data Representation: Structuring the Narrative

Before feeding data to a model, you must define what a "sequence" is. Raw logs are messy; you need to structure them into **Sessions** or **Windows**.

#### **A. Defining the "vocabulary" of Actions**

Treat user actions like words in a language. Map every significant event to a token ID.

  * **Authentication:** `LOGIN_SUCCESS`, `LOGIN_FAIL`, `PWD_RESET`, `2FA_REQ`
  * **Navigation:** `VIEW_PROFILE`, `VIEW_SETTINGS`, `CHECK_BALANCE`
  * **Transactional:** `ADD_PAYEE`, `INITIATE_TRANSFER`, `CONFIRM_TRANSFER`
  * **Device:** `NEW_DEVICE`, `IP_CHANGE`

#### **B. Sequence Construction Strategies**

  * **Session-Based:** Group actions by a session ID. (Good for Account Takeover).
      * *Sequence:* `LOGIN_NEW_IP` -\> `PWD_CHANGE` -\> `TRANSFER_MAX`
  * **Sliding Window:** The last $N$ actions or last $T$ hours. (Good for velocity/bust-out fraud).
      * *Sequence:* `SMALL_TXN` -\> `SMALL_TXN` -\> `SMALL_TXN` -\> `LARGE_TXN`

-----

### 2\. Feature Engineering: Explicit vs. Latent

You can either manually calculate temporal features or let deep learning models learn them automatically.

#### **A. Explicit Temporal Features (The "Hard" Engineer Approach)**

These are manually coded features fed into tree-based models (XGBoost/LightGBM).

  * **Inter-Arrival Time (IAT):** The time gap between consecutive actions.
      * *Fraud Signal:* Bot attacks often have near-zero variance in IAT (inhumanly consistent).
  * **Velocity Change:** Acceleration of spending.
      * *Formula:* $\frac{\text{Spend in last 1h}}{\text{Avg Spend in last 30d}}$.
  * **Sequence N-grams:** The count of specific dangerous triplets.
      * *Example:* Count of (`LOGIN` -\> `CHANGE_PASS` -\> `WITHDRAW`) in the last 24h.

#### **B. Latent Sequence Embeddings (The "Deep" Learning Approach)**

Instead of manual features, you learn a vector representation of the user's sequence.

  * **Action2Vec:** Train an embedding layer (like Word2Vec) where similar actions (e.g., `ADD_PAYEE` and `EDIT_PAYEE`) are close in vector space.

-----

### 3\. Modeling Architectures

Different architectures suit different types of temporal fraud.

#### **Level 1: Markov Chains (Probabilistic)**

  * **Concept:** Calculate the probability of Action B following Action A.
  * **Use Case:** Simple anomaly detection. If a user goes from `CHECK_BALANCE` to `DOWNLOAD_DATA` (a path they never take), the transition probability is low ($<0.01\%$), triggering an alert.

#### **Level 2: RNNs and LSTMs (Sequential)**

  * **Concept:** Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM) networks maintain a "memory" of previous inputs. They are excellent for variable-length sequences.
  * **Mechanism:** The model reads actions one by one. If it sees `LOGIN` then `CHANGE_ADDRESS`, its internal "suspicion state" rises slightly. If the next action is `WITHDRAW`, the suspicion spikes.
  * **Variant:** **Time-LSTM**. Standard LSTMs assume equal time steps. Time-LSTMs take the *time elapsed* between actions as an additional input, which is crucial because a withdrawal 1 minute after login is different from one 1 week after.

#### **Level 3: Transformers (Attention-Based)**

  * **Concept:** Unlike LSTMs which read left-to-right, Transformers (like BERT) look at the whole sequence at once and use "Self-Attention" to weigh the importance of different events.
  * **Why it's better:** It can connect distant events. For example, it can link a `PHISHING_LINK_CLICK` (action 1) to a `TRANSFER` (action 50) occurring 3 days later, even if there are 49 normal actions in between.
  * **Implementation:** Use a smaller Transformer (e.g., 2-4 layers) to encode the sequence of the last 50 actions into a single "Risk Vector," then feed that vector into your classifier.

-----

### 4\. Implementation Strategy: The "Dual-Pipe" System

Running LSTMs or Transformers on *every* transaction in real-time is expensive. Use a tiered approach.

**Tier 1: Fast & Light (The Filter)**

  * **Model:** XGBoost / Random Forest.
  * **Input:** Aggregated temporal features (e.g., "Number of logins in last hour").
  * **Action:** If Risk \> 0.3, pass to Tier 2.

**Tier 2: Deep & Sequential (The Investigator)**

  * **Model:** LSTM or Transformer.
  * **Input:** The raw sequence of the last 50 actions ($[x_{t-50}, ..., x_t]$).
  * **Action:** Output final fraud probability.

### 5\. Specific Use Case Examples

| Scenario | Temporal Pattern | Recommended Model |
| :--- | :--- | :--- |
| **Account Takeover (ATO)** | **Sequence:** New IP $\rightarrow$ Change Pwd $\rightarrow$ Add Beneficiary. <br> **Timing:** Very fast execution. | **Markov Chain** or **LSTM**. These capture the "abnormal path" effectively. |
| **Bust-Out Fraud** | **Sequence:** Normal usage for months $\rightarrow$ Sudden max utilization $\rightarrow$ Payment bounce. <br> **Timing:** Long-term evolution (months). | **Transformer**. It handles long-range dependencies better than RNNs. |
| **Bot Attacks** | **Sequence:** Repetitive, rigid sequences (e.g., specific mouse clicks). <br> **Timing:** Perfectly periodic intervals. | **FFT (Fast Fourier Transform)** features fed into **XGBoost**. FFT detects unnatural periodicity. |

**Would you like me to generate Python code using PyTorch to demonstrate a simple LSTM setup for transaction sequences?**
