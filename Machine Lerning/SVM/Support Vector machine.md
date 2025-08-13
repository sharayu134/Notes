# SVM - Supervised Classification 


In given data set you try to draw line dividing the dataset 

which one best divides the data

<img width="816" height="485" alt="image" src="https://github.com/user-attachments/assets/f51d0269-c163-4752-a3e9-11481c7bd186" />
It is A 


For following which one 
<img width="816" height="485" alt="image" src="https://github.com/user-attachments/assets/88789078-d164-433a-89e4-6c895a268625" />
its still A, as others are close to the points
<img width="816" height="485" alt="image" src="https://github.com/user-attachments/assets/4c1fc220-ba54-405f-8297-2b1c521280f2" />


For example C, what will be value for new point *, logically looks like red+ but coming as blue- which is wrong 
<img width="816" height="485" alt="image" src="https://github.com/user-attachments/assets/83c33394-5097-4d22-8723-eda5ae4fe84e" />
Following are known as margins 
<img width="816" height="485" alt="image" src="https://github.com/user-attachments/assets/1ece5f94-2ed1-4c9d-ada4-9f0fcb73312d" />
SO to get a good line we need to **maximise the margin**
<img width="816" height="485" alt="image" src="https://github.com/user-attachments/assets/df00f3d9-1390-4e08-b028-ceeb3d5ac546" />
These lines are called as support vectors, 


Issue with SVM is that they are not robust with outliers, it might not be a good model if there are outliers in your dataset



For example like this 
<img width="816" height="118" alt="image" src="https://github.com/user-attachments/assets/e07eb2d5-ccb5-4fef-90f1-06e61a0b0c68" />
we cannot draw two lines this is invalid these are tobe single line
<img width="816" height="355" alt="image" src="https://github.com/user-attachments/assets/ceb59e63-ded9-4409-9fa0-672e766ba11b" />
But we can project these to new values like x=x, y=x^2, to draw a line
<img width="816" height="399" alt="image" src="https://github.com/user-attachments/assets/7ea2747f-4f39-451c-a323-8d790f913dc8" />
This transformation is known as kernel trick 

<img width="501" height="296" alt="image" src="https://github.com/user-attachments/assets/5cffe6bf-4973-4eb0-9a18-4986bfaf71c6" />
This given better accuracy in case of magic dataset
