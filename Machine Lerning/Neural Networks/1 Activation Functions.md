* Sigmoid
  * output is from 0 to 1  sigmoid(a) = - 1/(1+e^-a)
  * <img width="1445" height="766" alt="image" src="https://github.com/user-attachments/assets/e562c670-d18b-4a91-b1a3-410f4c7b91de" />
  * slower in training

* Relu -
  * Rectified Linear Unit - ReLU(a) = max(0,a)
  * <img width="1445" height="766" alt="image" src="https://github.com/user-attachments/assets/b54974fe-467a-4caf-8d04-45ad70077e6f" />
  * faster in training
  * <img width="1445" height="683" alt="image" src="https://github.com/user-attachments/assets/70c874dc-5965-436d-b3b5-cd2663d063b5" />

* Softmax
  *log(1+e^x)  log in machine learnig is log to base e
  * It gives the probability of the output values from 0 to 1
  * <img width="559" height="213" alt="image" src="https://github.com/user-attachments/assets/914e5c07-f548-441e-97ff-343780e88078" />
  * so with softmax is mostly used at end when we are doing multiclass classification like recognising handwritten digits  In output we wanna know what number from 0 to 9 it is

In machine learning, **tanh, ReLU, sigmoid, and softmax** are primarily used as **activation functions** within neural networks. They help the network learn complex patterns in data by introducing non-linearity. Each has specific properties that make it suitable for different real-life applications.

---
## Sigmoid
The sigmoid function squashes any input value to a number between 0 and 1. This output can be interpreted as a probability, making it ideal for **binary classification** tasks where the goal is to predict one of two possible outcomes.

* **Real-life Applications:**
    * **Spam Detection 📧:** Classifying an email as either "spam" (1) or "not spam" (0).
    * **Medical Diagnosis 🩺:** Predicting whether a patient has a certain disease (1) or not (0) based on their medical data.
    * **Sentiment Analysis:** Determining if a product review is positive (1) or negative (0).



---
## Tanh (Hyperbolic Tangent)
Tanh is very similar to the sigmoid function but squashes values to a range between -1 and 1. Because its output is zero-centered, it often helps in the training of a model by keeping the activations from shifting too far in one direction.

* **Real-life Applications:**
    * **Natural Language Processing (NLP) 🗣️:** It's commonly used in the hidden layers of Recurrent Neural Networks (RNNs) for tasks like sentiment analysis where the sentiment can be negative, neutral, or positive.
    * **Sequence Data:** Analyzing time-series data or other sequential information where the context can be positive or negative.



---
## ReLU (Rectified Linear Unit)
ReLU is one of the most popular activation functions in deep learning. It's very simple: if the input is positive, it outputs the same value; if it's negative, it outputs zero. This simplicity makes it computationally very efficient, allowing for faster training of large and deep neural networks.

* **Real-life Applications:**
    * **Computer Vision 🖼️:** Widely used in Convolutional Neural Networks (CNNs) for tasks like **image recognition** (e.g., identifying cats in photos) and **object detection** in self-driving cars.
    * **Deep Learning Models:** It is the default activation function for the hidden layers of many types of neural networks due to its efficiency and ability to mitigate the vanishing gradient problem.



---
## Softmax
The softmax function is a generalization of the sigmoid function. It's used in the output layer of a neural network for **multi-class classification** problems, where an input needs to be categorized into one of several possible classes. Softmax converts a vector of numbers into a probability distribution, where the sum of all the probabilities is 1.

* **Real-life Applications:**
    * **Handwritten Digit Recognition ✍️:** Classifying an image of a handwritten digit into one of the 10 possible classes (0 through 9). The output would be a probability for each digit, and the highest probability is the model's prediction.
    * **Image Classification:** Identifying an animal in a picture as a "dog," "cat," "lion," or "horse."
    * **Music Genre Classification 🎶:** Categorizing a song into genres like "rock," "pop," "jazz," or "classical."
    * 
The hyperbolic tangent, or **tanh**, is a mathematical function. It's an "S"-shaped (sigmoidal) curve that takes any real number and maps it to a value between -1 and 1.

---
## Mathematical Definition

The hyperbolic tangent of a number $x$ is denoted as $\tanh(x)$. It's defined as the ratio of the hyperbolic sine ($\sinh(x)$) to the hyperbolic cosine ($\cosh(x)$).

$$\tanh(x) = \frac{\sinh(x)}{\cosh(x)}$$

It can also be expressed using the exponential function, $e^x$:

$$\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$$

---
## Key Properties

* **Domain**: The input $x$ can be any real number, from $-\infty$ to $+\infty$.
* **Range**: The output of the function is always between -1 and 1. It approaches -1 as $x$ goes to negative infinity and approaches 1 as $x$ goes to positive infinity.
* **Symmetry**: It is an **odd function**, meaning $\tanh(-x) = -\tanh(x)$. The graph is symmetric about the origin.
* **Graph**: The function has a characteristic "S" shape. It passes through the origin (0,0).
    

---
## Applications

Tanh is widely used in various fields for its convenient properties:

* **Machine Learning & Neural Networks** 🧠: It is often used as an **activation function** in neural networks. Because its output is centered around zero (from -1 to 1), it can help in model training by normalizing values passed between layers.
* **Physics & Engineering** ⚛️: It appears in calculations related to special relativity (rapidity) and in modeling magnetic systems (e.g., the Ising model).
* **Calculus**: Its derivative is simple and expressed in terms of itself: $\frac{d}{dx}\tanh(x) = 1 - \tanh^2(x)$.
