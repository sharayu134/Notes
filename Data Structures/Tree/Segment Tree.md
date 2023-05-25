
# Segment Tree [ interval tree ]
1. Fast range quesries - finding sum/min/max for range of numbers 
2. Let's say you have to get the max of arr [6,10,5,3,5,9] of size n
3. create arr with size 2*n
4. put all the elements at the second half of the arr [0,0,0,0,0,0,6,10,5,3,5,9]
5. now for each ele from last calculate the max in pair and then pair these pair to get max 
6. ![image](https://github.com/sharayu134/Notes/assets/43854821/139a1a00-d131-4650-9cbd-97863edef502)
7. ``` for(int i= n-1;i>=0;i--) tree[i] = Math.max(tree[2*i],tree[2*i+1]) ```
8. And the array fits inn ![image](https://github.com/sharayu134/Notes/assets/43854821/ca474d7f-9838-488e-be1e-0a0fb9854c98)
8. **Time Complexity** is log(n) as each time we move the arr is halved
