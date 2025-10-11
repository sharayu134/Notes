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
* There are two term memories 

video https://www.youtube.com/watch?v=YCzL96nL7j0





