* In k means algorithm we first select K, number of clusters we want to select
* Then we randomly select K number of points
* Lets take one example
* <img width="900" height="279" alt="image" src="https://github.com/user-attachments/assets/65a61a45-f3cc-4706-9b86-67c1ce64a612" />
* we select k=3
* then we randomly select 3 distinct data points
  <img width="900" height="279" alt="image" src="https://github.com/user-attachments/assets/1fe04cf4-4072-4bec-a0dc-d08387d96d1c" />
* For each data point we will assign the cluster as per the distance of the data point from the each cluster's center point <img width="900" height="389" alt="image" src="https://github.com/user-attachments/assets/4b7f2d70-a438-430f-9f0e-168a2b3d980a" />
* we will assign the data point to the closest cluster
This is how the points look like <img width="900" height="389" alt="image" src="https://github.com/user-attachments/assets/b1fe51a3-0dee-4112-a50e-66c44b7a4072" />
* Now we calculate the mean in this case 
* then we calculate the variance of all the points from these selected K data points
* This process gets repeated till we get the 
