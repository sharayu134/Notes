# K-nearest algorithm KNN

For supervised learning algorithm as involves lables

1. It's as simple as the header
2. Plot the data
3. Decide the K, dependent on data size it's usually 3,5, etc
4. find the euclidean distance from each point to each point - dist = sqrt((x1-x2)^2 + (y1-y2)^2)
5. then Check the majority label of K nearest points 
6. and that's the prediction

lets checkout fillowing data with lables "+" and "-"
   <img width="959" height="527" alt="image" src="https://github.com/user-attachments/assets/976f0037-8cef-4c4e-954d-86d05c799eac" />
# for a new point (40,2) try to find the label
<img width="959" height="527" alt="image" src="https://github.com/user-attachments/assets/78bb5954-c3d4-4cf4-81c7-a8ad2cf47da4" />
<img width="495" height="331" alt="image" src="https://github.com/user-attachments/assets/dc200b34-9056-4524-bb6c-ff51f34d1254" />
It's going to be blue <img width="495" height="331" alt="image" src="https://github.com/user-attachments/assets/553b95e6-808e-4921-a96b-23bb1c7a8643" />
# for a new point (240,2) try to find the label
<img width="812" height="434" alt="image" src="https://github.com/user-attachments/assets/55d3bf44-4089-4e42-bb86-324dca675e31" />
It's going to be red \<img width="812" height="434" alt="image" src="https://github.com/user-attachments/assets/2b978d70-2ccf-4bc6-a8bf-902c0a442392" />
<img width="947" height="767" alt="image" src="https://github.com/user-attachments/assets/06ea92ae-4ac4-4b13-88c7-487f35cbd819" />
# you can always adjust the number of ks to adjust result
