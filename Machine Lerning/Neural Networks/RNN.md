# Recurrent Neural Networks

* RNNs are mostly used for predictions based on series or ordered data or sequential data like stock prise prediction or time series
* <img width="999" height="427" alt="image" src="https://github.com/user-attachments/assets/01195264-b824-4ccb-ad8f-ff4bdebfcc54" />
* In above graph blue line has nine values and red line has 5 values, the model has to consider different amount of values to predict the next value, RNNs support this kind of use case where we consider different input considearions
* RNNs have weights, biases, layers and activation function but in addition they have feedback loop as well
* <img width="699" height="357" alt="image" src="https://github.com/user-attachments/assets/f62497d9-1705-45d3-9cfa-1bdb23f33c0e" />

*  Lets say we have to predict stock prices given historical data the next prediction will be affected by previous
*  <img width="875" height="221" alt="image" src="https://github.com/user-attachments/assets/4ad36e55-8060-48c2-854f-9356e585864a" />

*  lets consider only yesterday, today, tomorrow's values it starts with yesterdays value
*  we will get todays value as predition but for now we will ingnore it as we have todays value
*  <img width="931" height="423" alt="image" src="https://github.com/user-attachments/assets/b142073a-a814-432a-9b1d-7980353934d4" />
*  Now the value gained from activation function can be sent to next loop where we find tomorrows value from yesterday feedback and todays real value
*  <img width="931" height="423" alt="image" src="https://github.com/user-attachments/assets/5a7f7d4d-7ffe-49b9-9a60-14375bfea3c7" />

*  So the feedback loop allows both yesterdays and todays values to influence the prediction
*  <img width="931" height="327" alt="image" src="https://github.com/user-attachments/assets/32ecbbe7-a506-4eb3-b3be-3f9c9ff6acb9" />
*  <img width="669" height="327" alt="image" src="https://github.com/user-attachments/assets/70f57ce5-6baf-4316-a2ed-56a34da9a4df" />

*  Even if we want to consider any number of inputs for the prediction it's possible to consider all the previous values because of feed it looks like below
*  <img width="961" height="545" alt="image" src="https://github.com/user-attachments/assets/db6cc7ef-1d59-489d-bbd8-5d1df2d43124" />

*  see how feedback is carrying over the effect of all previous input
*  Regardless of how many times we unroll a recurrent neural network the weights and biases are shared across every input (the same set of weights and biases to every single input)
*  The more we unroll RNN, it becomes more difficult to train
*  The vanishing/Exploding Gradient problem

# The Exploding Gradient Problem

  * as we keep on adding the number of inputs the feedback will get affected as it's carrying inout from all previos outputs
  * if the initial weight was 2, then around 50th record it will become 2*50 which is huge number this will make the steps that we take to find minimum very large hence exploding gradient
  *  <img width="961" height="545" alt="image" src="https://github.com/user-attachments/assets/58d86d3c-21d7-4c71-952a-82b0a32b7bb6" />

  * The one way to avoid this is limit the weight to < 1, however this results in The vanishing gradient problem

# The Vanishing Gradient Problem

* for example lets set weigh to 0.5
* if we ahve 50 records then this feedback will become 2^50 which is close to 0 eventually the gradient vanishes
* <img width="961" height="545" alt="image" src="https://github.com/user-attachments/assets/d1b53036-1603-415f-9049-4f5d377e3486" />
* So instead of taking small takes to find minima we take very small steps and never reach the minima
* Solution to this is LSTM
video https://www.youtube.com/watch?v=AsNTP8Kwu80
# Long Short Term Memory Networks (LSTM)
* LSTM uses different paths for long and short term memories
* <img width="501" height="545" alt="image" src="https://github.com/user-attachments/assets/1a6d2b3a-b882-4b81-8d08-fe8ab36c336c" />
* LSTM uses Sigmoid activation and Tanh activation function
* There are two term memories Long term and Short term, initially Long and Short term memory is determined
* to determine how much % of memory to consider sigmoid used as it ranges from 0 to 1, and to determine potrntial memories tanH is used
* https://github.com/sharayu134/Notes/blob/main/Machine%20Lerning/Neural%20Networks/Activation%20Functions.md (check activation functions here) 
* So one unrolling of LSTM is divided into 3 parts
 * In first part
  * using short term memory and input after multipying by weights they get summed up and the sum goes through the sigmoid function, so sigmoid function gives %, you multiply the longterm mermory buy this, This is called Forget gate 
  * <img width="485" height="796" alt="image" src="https://github.com/user-attachments/assets/ee18fc47-68cb-4da3-9840-25664a97df47" />
 * Second part
  * the sum to be added is calculated to long term memory, the short term memory and input are the ins and then they get multiplied by weights summed up into sigmoid function (0,1) to get % of memory to be kept
  * the short term memory and input are the ins and then they get multiplied by weights summed up into tanh (-1,0,1) to give potential Long term memory
  * the we multiply both % and potential this gives us sum to be added to the Long term memory, this gives final Long term memory
  * <img width="957" height="796" alt="image" src="https://github.com/user-attachments/assets/c202ed61-ccc2-4db6-80e0-8c61ea804f4c" />
  * this stage is input calculate Long Term memory
 * In third part
  * the short term memory is calculated by  using above Long term memory
  * This goes from Tanh function(-1,0,1) this gives potential short term memory
  * the sum to be added is calculated to long term memory, the short term memory and input are the ins and then they get multiplied by weights summed up into sigmoid function (0,1) to get % of short term memory to be kept
  * then we multiply both of them to get new short term memory
  * <img width="1454" height="796" alt="image" src="https://github.com/user-attachments/assets/3f0f521f-8619-4b08-b7d7-fe0dc358a60d" />

  * this stage is output get - the short term memory
* <img width="1454" height="796" alt="image" src="https://github.com/user-attachments/assets/477e11e8-fd13-4346-ae68-fc2aeb074e42" />
* because of the long and short term memory (sigmoid/tanh) the exploding or vanishing gradient issue is resolved with LSTM
* 

video https://www.youtube.com/watch?v=YCzL96nL7j0



Excellent question — the **loss function** is a crucial part of understanding RNNs, both for learning and for interviews. Let’s go step-by-step with examples, intuition, and what’s expected in an ML interview or system design discussion.

---

## 🧠 What Is a Loss Function (in RNN context)?

The **loss function** measures how far the RNN’s predictions are from the actual targets.
It’s the **objective** we try to minimize during training — via backpropagation through time (BPTT).

For RNNs, since outputs are **sequential**, the loss is usually computed **at every time step** and then **averaged or summed** across the whole sequence.

---

## ⚙️ General Formula

If a sequence has `T` time steps, and ( y_t ) is the true label while ( \hat{y_t} ) is the predicted output at time step `t`,
then the **total loss** ( L ) is:

[
L = \frac{1}{T} \sum_{t=1}^{T} \text{Loss}(\hat{y_t}, y_t)
]

This ensures the RNN learns from **each step in the sequence**, not just the final output.

---

## 🧩 Common Loss Functions Used in RNNs

### 1️⃣ **Cross-Entropy Loss (for classification)**

Used when each output is a **class label**, e.g.:

* Next-word prediction in a sentence
* Sentiment classification (positive/negative)
* Character-level text generation

**Example:**
For a sequence of words, each step predicts the next word:
[
L_t = -\sum_{i} y_{t,i} \log(\hat{y}_{t,i})
]
Then you average or sum across all time steps.

**PyTorch example:**

```python
loss_fn = nn.CrossEntropyLoss()
loss = loss_fn(predictions.view(-1, vocab_size), targets.view(-1))
```

✅ **Interview Tip:**
Say that “CrossEntropyLoss is standard for RNNs in sequence classification or next-token prediction.”

---

### 2️⃣ **Mean Squared Error (MSE) (for regression)**

Used when outputs are **continuous values**, e.g.:

* Time-series forecasting (predicting stock prices)
* Sensor data prediction

[
L_t = (\hat{y_t} - y_t)^2
]
[
L = \frac{1}{T} \sum_{t=1}^{T} L_t
]

**Example (PyTorch):**

```python
loss_fn = nn.MSELoss()
loss = loss_fn(y_pred, y_true)
```

✅ **Interview Tip:**
Mention that “MSE is typically used when RNNs are applied to numerical sequences, like forecasting or signal modeling.”

---

### 3️⃣ **Sequence-level Loss (for sequence-to-sequence tasks)**

Used in **machine translation, summarization, or speech recognition**, where the model outputs a whole sequence.

Loss is computed over the entire predicted sequence vs. the true sequence:
[
L = \sum_{t=1}^{T} \text{CrossEntropy}(\hat{y_t}, y_t)
]

Later improvements (like Transformers or seq2seq) add techniques like:

* **Teacher Forcing** (feeding true previous output during training)
* **Attention-based loss** for aligning time steps

---

### 4️⃣ **CTC Loss (Connectionist Temporal Classification)**

Used for **speech recognition** or other cases where timing/alignment between input and output is uncertain (e.g., variable-length output).

It allows the network to learn without requiring an exact 1-to-1 alignment between inputs and outputs.

**Example:**
Speech input of 100 frames → word output of 5 tokens.
CTC finds optimal alignment paths.

✅ **Interview Tip:**
If they ask about “loss for sequence labeling with variable alignment,” mention **CTC Loss** — that’s a strong signal of deep understanding.

---

## 📈 How the Loss Works During Training

1. **Forward Pass:**
   The RNN processes each time step and produces predictions ( \hat{y_t} ).

2. **Compute Loss:**
   Compare predictions with true targets ( y_t ) at every step.

3. **Backpropagation Through Time (BPTT):**
   Gradients are propagated **back through all time steps**, updating shared weights to minimize the sequence loss.

---

## 🎯 Interview Takeaway (What to Say)

> “The loss function in an RNN depends on the type of problem.
> For classification or next-token prediction, we use cross-entropy loss computed at each time step and averaged.
> For regression or time-series forecasting, we use MSE.
> In more complex sequence-to-sequence tasks, we may use sequence-level cross-entropy or specialized functions like CTC Loss.
> The total loss is aggregated across all time steps and backpropagated through time to update the shared parameters.”

---

## 💡 Bonus — System Design Insight

In an **ML system design interview**, you could mention:

* For **online models** (predicting step-by-step), compute loss **incrementally** as new data arrives.
* For **offline training**, compute total sequence loss and backpropagate at the end.
* Monitor **per-step losses** to identify where the model struggles (e.g., early vs. late in sequences).

---

Would you like me to show a **PyTorch code example** that computes per-timestep cross-entropy loss for an RNN on text data (so you can see how it’s implemented end-to-end)?


