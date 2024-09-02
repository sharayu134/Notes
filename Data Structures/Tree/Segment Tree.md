
# Segment Tree [ interval tree ]  Fast range quesries - finding sum/min/max for range of numbers 

https://leetcode.com/problems/range-sum-query-mutable/editorial/

## Segment tree normal

### Build
1. Input array of size n will be given 
2. size of the segment tree = 4*n+1
3. 0th node will represent the sum/min/max for index  0 to n-1
4. 2*0+1 ie first child of zero will be holding sum for 0 to (0+n-1)//2 range
5. 2*0+2 ie second child of zero will hold sum for range (0+n-1)//2 +1 to n-1
6. This will keep going on descending till theleaf node where l==r and will be individual node itself here update the sum to arr[l]
7. now the return the sum keep adding the sum for children node to the parent node

   ```
       def __init__(self, nums: List[int]):
        self.n = len(nums)
        self.nums = nums
        tree = [0] * (4*self.n+1)
        def build(i, l ,r):
            nonlocal tree
            if l==r:
                tree[i] = nums[l]
                return tree[i]
            mid = (l+r)//2
            res = build(2*i+1, l, mid)
            res2 =build(2*i+2, mid+1, r)
            tree[i] = res+res2
            return tree[i]
        self.tree = tree
        build(0,0,self.n-1)
   ```
### Query

1. If the current range find range and  is not overlapping at all return 0
2. If the find range is completely overlapping current range is
3. 


```
def sumRange(self, left: int, right: int) -> int:
        def query(i,l,r):
            if r<left or right<l:
                return 0
            if left<= l<=r<=right:
                return self.tree[i]
            mid = (l+r)//2
            res1 = query(2*i+1, l, mid)
            res2 = query(2*i+2, mid+1, r)
            return res1+res2
        return query(0,0,self.n-1)
```
1. Fast range quesries - finding sum/min/max for range of numbers 
2. Let's say you have to get the max of arr [6,10,5,3,5,9] of size n
3. create arr with size 2*n
4. put all the elements at the second half of the arr [0,0,0,0,0,0,6,10,5,3,5,9]
5. now for each ele from last calculate the max in pair and then pair these pair to get max 
6. ![image](https://github.com/sharayu134/Notes/assets/43854821/139a1a00-d131-4650-9cbd-97863edef502)
7. ``` for(int i= n-1;i>=0;i--) tree[i] = Math.max(tree[2*i],tree[2*i+1]) ```
8. And the array fits inn ![image](https://github.com/sharayu134/Notes/assets/43854821/ca474d7f-9838-488e-be1e-0a0fb9854c98)
8. **Time Complexity** is log(n) as each time we move the arr is halved
9. https://www.youtube.com/watch?v=xztU7lmDLv8&ab_channel=StableSort
