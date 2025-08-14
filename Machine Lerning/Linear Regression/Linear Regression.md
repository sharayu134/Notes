# Linear Regression

Supervised Learning


In linear regression we try to predict the continuos values like price of the house

<img width="625" height="417" alt="image" src="https://github.com/user-attachments/assets/efabb6a2-08b0-4611-87de-6efe0a97e312" />
We try to find line of best fit for the data,
<img width="628" height="417" alt="image" src="https://github.com/user-attachments/assets/78397e21-45ef-47a5-91a7-533c9374a672" />
- It's finding out what y will be when x is given
- the equation modeled by is y=mx+c
- c is y when x=0
- m is the slop of the line <br>
- There is **Residual/error** = |y-y^| y is actual value and y^ is predicted value on the line we try to find minimum possible Residual to fit the line <br>
- <img width="628" height="417" alt="image" src="https://github.com/user-attachments/assets/63a1946b-9fe7-42b6-af6e-df652d75bcc9" />
- We also sum the squared residuals of all the points in data ss = |yi-y^i|^2 This has to be minimum <br>
- <img width="388" height="147" alt="image" src="https://github.com/user-attachments/assets/beca5498-020d-4057-95b5-0cc4f22b17f2" />
- <img width="388" height="175" alt="image" src="https://github.com/user-attachments/assets/227fae40-190a-4ffc-b802-136ccb4a0b54" />
- Squaring is done so that the penalty increases as we as away from predisction smaller when it's near
- So we try to find line y=mx+c with minimum residual/error
- this is simple linear regression
- Multiple linear regression <img width="770" height="175" alt="image" src="https://github.com/user-attachments/assets/9508eb7f-3ca9-4e5e-b576-33f9cb88eac2" />



# Assumptios of lieanr regression, do not use linear regression if any of these is not followed
- Linearity  
  - Data is linear
  - Incorrect <img width="332" height="175" alt="image" src="https://github.com/user-attachments/assets/ae476201-9dd3-492a-b9c4-9ae7e4e14db8" />
  - The shape of data has to be linear, not close to curve or any other shape
  - Mathematically as x increases y increase and as x decreases y decrases vice versa
- Independence
  - the y1 and y2 like any two points on the line should be indendent of each other
  - all the samples should be independent
  - <img width="332" height="283" alt="image" src="https://github.com/user-attachments/assets/6a016351-7e97-4958-943a-80d32bf76cba" />
- Normality
  - When we plot residuals on the graph then the
  - <img width="332" height="364" alt="image" src="https://github.com/user-attachments/assets/141bc743-1ce1-4156-aece-d011e49e551c" />
  - <img width="332" height="221" alt="image" src="https://github.com/user-attachments/assets/e84dfccc-fcf7-4739-944e-d7243a03d020" />
- Homoskedasticity
  - variance od residual remails constant
  - <img width="332" height="221" alt="image" src="https://github.com/user-attachments/assets/733527e5-cc5c-48d1-92b2-7eeb1860ac70" />
  - Incorrect <img width="332" height="394" alt="image" src="https://github.com/user-attachments/assets/5caaf523-8d61-4b6f-ae76-efa4dab2984e" />
  - When we plot residuals on the graph then the data should be evenly distributed
