https://www.geeksforgeeks.org/window-sliding-technique/

https://www.geeksforgeeks.org/sliding-window-problems-identify-solve-and-interview-questions/

fixed/variable window


which will be moving


min/max continuous subsets 


continuous subsets with condotion


n^2 time complexity by brute force can be reduced to n


K - window size


## K

1. Given -> fixed window
2. Asked
   - Bin search on answer + fixed window
   - variable window

## fixed window
1. select left and right in window with given size k
2. moving forward exclude left from ans and add right to the ans
3. check condition

## variable window
1. select window with size 1
2. increase right as gong forward when condition matched
3. else reset l to r in condotion not matched
4. update min/max/res as required

     




