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
* So now we will try to find out B3 for which SSR is minimum by adusting the B3 for each iteration <img width="927" height="354" alt="image" src="https://github.com/user-attachments/assets/0c2a5817-9cd6-4932-984c-cf90c00f56cd" />

* Instead of finding out b3 from all the range value instead we can use gradient descent
* If you want you can go back to gradient descent https://github.com/sharayu134/Notes/blob/main/Machine%20Lerning/Linear%20Regression/Actual%20Implementation%20Gradient%20Descent%20iterative%20optimisation.md
* So for that we will find out derivate of SSR <img width="1279" height="779" alt="image" src="https://github.com/user-attachments/assets/74e90651-6b12-49a3-812e-9014dda664e3" />

* Here the SSR is <img width="860" height="608" alt="image" src="https://github.com/user-attachments/assets/88b773fe-0f4c-498f-aa2a-d8a1b5e63634" />

* Also the derivative of SSR is <img width="757" height="462" alt="image" src="https://github.com/user-attachments/assets/e7515fcd-40e0-4764-a525-17b6c154b556" />
* Now with learnign rate 0.1 and weight 0 go ahead with Gradient Descent
* with the SSR derivate calculate the derivative value by putting required values<img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/f1cf400a-0393-45e5-a0bc-c94df49ea7fd" />
* The value we get is slope when b3 is 0 <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/c85a6c69-57e7-4c4d-bfd0-6c4a4723df00" />
* In Gradient Descent step size = Slope*Learning rate
* <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/373e2d52-6fe5-48f9-997e-e7f01f7c2671" />
* So step size is -1.57 <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/7f50c1b5-fa92-4bc0-b5d0-f190852155b9" />
* So new value for b3 is 1.57 <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/7965c20e-4e59-41b6-a0eb-b55e0d909e8e" />
* <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/e3953739-9f75-409e-9870-374b288cbf7b" />
* <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/f6a4bee3-1715-40d2-baea-14b9fa5b9c3e" />
* Now as we got new value for b3 will use it to calculate slope(derivate of SSR) and step size(slope*learning rate)<img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/6b8c045d-4b4a-4a49-abf3-9156c7ba3022" />
* this derivate is -6.26 which is slope when b3 is 1.57 <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/16b09af1-76ee-44fe-a9bc-4a777a79d8a2" />
* <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/564ee484-3af5-4e28-8084-adf40b461e55" />
* So we get new value for b3 <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/265b2794-d36b-447c-8bd6-dfd2480e29bc" />
* <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/a6c50130-2db7-456b-9868-7d95410a3683" />
* <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/f61da486-9783-4857-8c78-2f8f9fc29a62" />
* <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/36f22687-b04d-42cb-9ffa-19708077531b" />
* <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/779f6305-8856-498a-964e-dc49f5019af1" />
* <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/af39320f-cf19-4936-921e-9872ade853ff" />
* <img width="1265" height="711" alt="image" src="https://github.com/user-attachments/assets/8a0b1b00-5db6-4673-96ae-d5a1fd360c88" />
* 

I was following https://www.youtube.com/watch?v=iyn2zdALii8
















