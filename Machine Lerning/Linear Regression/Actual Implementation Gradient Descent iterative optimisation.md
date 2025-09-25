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
*   reassign weight and bias using dw and db
*
* predict()
* simply predict using the weight and bias from fit
*  calculate loss (how far predicted value is from actual remember this is supervised we have labelled data)

Anyways watch the video again


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
