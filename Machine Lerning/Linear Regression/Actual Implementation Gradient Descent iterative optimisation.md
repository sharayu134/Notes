https://www.youtube.com/watch?v=ltXSoduiVwY&ab_channel=AssemblyAI

Lets take gradient descent for linear regression

* equation y=mx+c
* loss function = MSE - MEAN square Error = 1/n from 1 to n (y-y^)**2
* there are going to be two methods fit() and predict() as any model
* fit()
* Set learning rate like 0.01 something, set number of itrations - N, set weights to zero, set bias to zero
* Do N iterations of following
*   predict the values using set up weight and bias
*   calculate dw (derivative of weight) and db (deriative of bias)
*   re-assign weight and bias using dw and db


* predict()
* simply predict using the weight and bias from fit
*  calculate loss (how far predicted value is from actual remember this is supervised we have labelled data)

Anyways watch the video again if you dont get it


import numpy as np


class LinearRegression:

    def __init__(self, lr = 0.001, n_iters=1000):
        self.lr = lr
        self.n_iters = n_iters
        self.weights = None
        self.bias = None

    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0

        for _ in range(self.n_iters):
            y_pred = np.dot(X, self.weights) + self.bias

            dw = (1/n_samples) * np.dot(X.T, (y_pred-y))
            db = (1/n_samples) * np.sum(y_pred-y)

            self.weights = self.weights - self.lr * dw
            self.bias = self.bias - self.lr * db

    def predict(self, X):
        y_pred = np.dot(X, self.weights) + self.bias
        return y_pred


We use derivatives in linear regression to find the **optimal values** for the weights and bias. This process is called **gradient descent**, which is an optimization algorithm. The derivatives, also known as the **gradients**, tell us the direction and magnitude of the steepest increase of the cost function. By moving in the opposite direction of the gradient, we can iteratively minimize the cost function and find the best fit line. 

---

### Why We Use Derivatives

In linear regression, the goal is to minimize the **cost function**, which measures the error between our model's predictions and the actual values. A common cost function is the **Mean Squared Error (MSE)**. The MSE is a function of our model's parameters: the weights ($w$) and the bias ($b$).

The formula for MSE is:

$$J(w, b) = \frac{1}{2m} \sum_{i=1}^{m} (y_{pred}^{(i)} - y^{(i)})^2$$

* $J(w, b)$ is the cost function.
* $m$ is the number of samples.
* $y_{pred}^{(i)}$ is the predicted value for the $i$-th sample.
* $y^{(i)}$ is the actual value for the $i$-th sample.

To find the minimum of this function, we need to calculate its partial derivatives with respect to each parameter ($w$ and $b$). These derivatives are the gradients:

* The gradient with respect to the weights ($w$) is:
    $$
    \frac{\partial J}{\partial w} = \frac{1}{m} \sum_{i=1}^{m} (y_{pred}^{(i)} - y^{(i)}) \cdot x^{(i)} = \frac{1}{m} X^T (y_{pred} - y)
    $$
    This is what `dw` represents in the code.
* The gradient with respect to the bias ($b$) is:
    $$
    \frac{\partial J}{\partial b} = \frac{1}{m} \sum_{i=1}^{m} (y_{pred}^{(i)} - y^{(i)}) = \frac{1}{m} \sum (y_{pred} - y)
    $$
    This is what `db` represents in the code.

These gradients tell us how much the cost function changes with a small change in our weights and bias. By subtracting a fraction of these gradients from the current weights and bias, we take a "step" downhill toward the minimum of the cost function. This is the **gradient descent update rule**:

* $w = w - \alpha \cdot \frac{\partial J}{\partial w}$
* $b = b - \alpha \cdot \frac{\partial J}{\partial b}$

Here, $\alpha$ is the learning rate (`lr`).

---

### Why We Are Summing Up

We sum up the values of $(y_{pred} - y)$ because we are calculating the **average gradient** across **all** training examples. The goal is to minimize the total error for the entire dataset, not just for a single data point.

* The term $(y_{pred} - y)$ is the error for each individual sample.
* The summation $\sum (y_{pred} - y)$ accumulates the total error across all samples.
* Dividing by `n_samples` (`1/n_samples`) gives us the average error, which is the final gradient.

This process ensures that the parameter updates are based on the collective performance of the model on the entire dataset, leading to a more stable and accurate convergence to the minimum of the cost function. This method is called **batch gradient descent**.


Gradient descent is an iterative optimization algorithm used to find the minimum of a function. In machine learning, it's used to find the optimal values for a model's parameters (like weights and bias) by minimizing a **cost function** that measures the error between the model's predictions and the actual data.

### How It Works 📈

Imagine you're standing on a hill in a thick fog, and your goal is to get to the lowest point in the valley. You can't see the whole landscape, so you have to rely on local information. The most effective strategy is to feel the slope beneath your feet and take a step in the direction of the steepest descent. You repeat this process, taking small steps downhill until you reach the bottom.

This is exactly what gradient descent does:
1.  **Start somewhere**: The algorithm begins with an initial, random guess for the model's parameters. This is like starting at a random point on the hill.
2.  **Find the slope**: It then calculates the **gradient** of the cost function at that point. The gradient is a vector of partial derivatives that points in the direction of the steepest *ascent* (uphill).
3.  **Take a step**: The algorithm updates the parameters by moving in the **opposite direction** of the gradient. This ensures you're always moving downhill. The size of the step is determined by the **learning rate**, a hyperparameter you set.
4.  **Repeat**: These steps are repeated over and over. With each iteration, the model's parameters are adjusted, and the cost function decreases. The steps get smaller as you get closer to the minimum, eventually converging to the lowest point of the function. 

---

### Key Components

* **Cost Function (or Loss Function)**: This function quantifies the error of the model's predictions. The goal is to minimize this value. A common example is Mean Squared Error (MSE).
* **Parameters (Weights and Bias)**: These are the values the model learns from the data to make predictions. Gradient descent adjusts these parameters to reduce the cost.
* **Learning Rate ($\alpha$)**: This is a crucial hyperparameter that controls the size of the steps taken during each iteration.
    * **Too large**: The algorithm might "overshoot" the minimum and fail to converge.
    * **Too small**: The algorithm will take a very long time to converge.
* **Gradient ($\nabla J$)**: This is the slope of the cost function with respect to the parameters. It tells the algorithm which way to go to decrease the cost most effectively.

### Variants of Gradient Descent

The primary difference between the types of gradient descent is the amount of data used to calculate the gradient in each step:

* **Batch Gradient Descent**: Uses the **entire training dataset** to compute the gradient for each step. This provides a very stable and accurate gradient but can be computationally expensive and slow for large datasets.
* **Stochastic Gradient Descent (SGD)**: Uses a **single, randomly selected training example** to compute the gradient at each step. This is much faster and can escape local minima more easily due to its noisy updates, but the path to convergence can be erratic.
* **Mini-Batch Gradient Descent**: A compromise between the two, this is the most common variant. It uses a **small, randomly selected subset** of the training data (a "mini-batch") to compute the gradient. It offers a good balance of computational efficiency and stability.
