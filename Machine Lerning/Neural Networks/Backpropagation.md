# Backpropagation 

* Here we are trying to find out the values for all the params - weights and biases
*  These are the weigts and biases we are considering <img width="1022" height="480" alt="image" src="https://github.com/user-attachments/assets/7cf025e4-2620-4a98-a4df-e8f1de2444c8" />

* It  starts from the last parameter and traces all the way to first parameter to estimate all the other parameter
* However we can discuss all the main idea behind the backpropation by just estimating the last Bias, b3
* So in order to start from back lets assume that we already have optimal values for all the parameters, except for the last parameter b3
* <img width="1418" height="979" alt="image" src="https://github.com/user-attachments/assets/cd13e8fd-fa47-4644-a5ad-5a073a3b6a4b" />
* So now we just assume that the b3 which we are looking for is zero
* Now calculate the values for range(0,1) for this parameter set up
* Find out how much is Loss - SSR [Sum of all Squared Residuals]
* So now we will try to find out B3 for which SSR is minimum by adusting the B3 for each iteration
* Instead of finding out b3 from all the range value instead we can use gradient descent
* So for that we will find out derivate of SSR <img width="1279" height="779" alt="image" src="https://github.com/user-attachments/assets/74e90651-6b12-49a3-812e-9014dda664e3" />

* Here the SSR is <img width="860" height="608" alt="image" src="https://github.com/user-attachments/assets/88b773fe-0f4c-498f-aa2a-d8a1b5e63634" />

* 
