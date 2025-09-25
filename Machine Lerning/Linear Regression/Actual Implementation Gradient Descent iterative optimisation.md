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
