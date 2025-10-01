# Regression Tree

* Regression Tree has each leaf node as numeric value
* It will look like this <img width="1214" height="730" alt="image" src="https://github.com/user-attachments/assets/ec495528-3f78-4fa9-95f5-a546f7b15ef9" />

* Data looked like this <img width="1214" height="730" alt="image" src="https://github.com/user-attachments/assets/24672c71-857b-4dd7-82a8-cbd63ebf1636" />

* So in order to build a regression tree we need to find root value numeric threshold
* To find it we will do the same thing we do it for numeric values in decision tree (try to remember then go back to decision tree)
* at each data point calculate average value for < and >= values, Find out difference between this average and actual values squared (residual squared)
* Select minimum value for the root
* like this<img width="1274" height="730" alt="image" src="https://github.com/user-attachments/assets/343a9990-7a42-43b7-9fd7-6becad22fb8a" />

* select the minimum <img width="1274" height="730" alt="image" src="https://github.com/user-attachments/assets/1e46ff77-c9f6-41df-8726-0469f05b0593" />
* repease the same over both the divided data to further split the regression tree <img width="1274" height="730" alt="image" src="https://github.com/user-attachments/assets/dc61c1ac-7314-4def-8845-64bedc98eae0" />
* when the group has same values for all the data points we can stop spliting the tree <img width="1274" height="730" alt="image" src="https://github.com/user-attachments/assets/5ee35bbe-2e8a-4ff3-9840-051cad31e0a7" />

* THis is predicting quite exact<img width="1274" height="730" alt="image" src="https://github.com/user-attachments/assets/cd25b7bb-58cc-4554-a4a3-7b28f9cb2b06" />

* SO there is overfitting issue There will be issue with new(unseen) data 
* Solution to this is decide a number where you want to stop further splitting the data (usually 20 but depends on data)
* So we seen this for one feature
* This can be done for each feature so to select root feature we will compare SSR (Sum of Squared Residuals) whichever has smallest SSR will become root and then move forward 
* 

https://www.youtube.com/watch?v=g9c66TUylZ4
