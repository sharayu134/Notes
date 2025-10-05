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
