# Logistic Regreassion for Classification

Given Data
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/6797d94d-6dbd-4f85-a777-78912b25faac" />
Can a regression line fit into this ?
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/8fab7f41-815c-4ced-8282-6d124b2d2d5f" />
Doesn't look so good 
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/09e0c7c7-9da7-49e5-8b89-b25308a82ab3" />
How do we represent the line  y^=mx+c
Can we model probalibility from this ?
probability is having values between 0 to 1 but y^=mx+c doesnt to that so lets limit it by making it a ratio
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/ddc69613-e6eb-4424-b8e1-b65c4d5bcf8d" />
now the values can be still negative so take logs 
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/e5315982-85b1-4ea0-a786-9a2f51ee30e7" />
Now solve by taking log take e to the power
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/fb8cc950-5a60-41c9-8f36-996ab25a0984" />
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/e056d1d6-f0bc-4ce1-8729-88ce78a7efc6" />
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/47a83b35-d4ec-4c08-8163-2b4d3021e599" />
this is form of sigmoid function 
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/8011ae40-2c9c-4bee-96dc-f62b7c5658e0" />
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/5f3675c5-46d7-4c46-be13-a7fdf3902d10" />
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/f6c9c569-f181-48ed-9d10-2f77a0d2df48" />
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/285f2a62-e96b-477c-bd54-4aaa87cd2ea5" />
This shape fits better on this data 
# trying to fit data to sigmoid function is logistic regression 


There is simple(single feature) and multiple(multiple features) logistic regression()
<img width="816" height="416" alt="image" src="https://github.com/user-attachments/assets/47edfc8e-2a2c-4f16-b2db-3bfa9d0d2abf" />

# Some more notes
* Classification problems like email spam or not, transaction is fradulnent or if someone has tumor or not
* Outcome is {0,1}

  ## Decision Boundary
* Decision Boundary when we plot the Logistic regression data, line separating positives and negatives, it could curve hyperbola or anything else
<img width="1235" height="677" alt="image" src="https://github.com/user-attachments/assets/e7ca63a4-5341-4ca9-923e-c3e966140e37" />

## Loss / Cost Function for logistic regression
* <img width="1235" height="677" alt="image" src="https://github.com/user-attachments/assets/4ab2a5c0-36eb-4d76-a1c6-72ff747f0c7b" />
* <img width="1235" height="677" alt="image" src="https://github.com/user-attachments/assets/aa4af6a1-4639-451d-924f-d92e39a9818f" />
* <img width="1597" height="842" alt="image" src="https://github.com/user-attachments/assets/b3a9d5e1-7870-409c-87ac-3fe13b869b6b" />
* <img width="1661" height="842" alt="image" src="https://github.com/user-attachments/assets/5325c985-2183-4524-8963-82e4ebfb7c42" />


