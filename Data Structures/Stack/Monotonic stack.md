# Monotonic stack

In case of a monotonic stack it's values will always keep increasing and keep decreasing


[1,2,3,4,66]


[9,6,4,1]


## decreasing 
1. Add first element in stack
2. if next element is smaller than top then it's okay add it
3. **while** next element is larger than top, pop the stack then append the element
4. here aim is to **add the next element in stack while keeping the order** intact so pop till you get in order, it's okay even if you exhaust the stack
5. the elements can be same as well so it totally depends on question if we wanna add it or not

```
        input num array
        stk.append(num[0])
        for i in range(1,n):
            while stk and stk[-1] > num[i]:
                stk.pop()
            stk.append(num[i])
```
https://www.geeksforgeeks.org/how-to-identify-and-solve-monotonic-stack-problems/


https://leetcode.com/discuss/study-guide/2347639/A-comprehensive-guide-and-template-for-monotonic-stack-based-problems
### Forward
```
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stk = []
        nge = {}
        n = len(nums2)

        for i in range(n):
            while stk and nums2[stk[-1]] < nums2[i]:
                top = stk.pop()
                nge[nums2[top]] = nums2[i]
            stk.append(i)

        while stk:
            top = stk.pop()
            nge[nums2[top]] = -1

        res = []
        for ele in nums1:
            res.append(nge[ele])
        return res
```
### Reverse
```
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stk = []
        nge = {}
        n = len(nums2)

        for i in range(n-1,-1,-1):
            while stk and nums2[stk[-1]] < nums2[i]:
                top = stk.pop()
            if stk: 
                nge[nums2[i]] = nums2[stk[-1]]
            else:
                nge[nums2[i]] = -1
            stk.append(i)

        res = []
        for ele in nums1:
            res.append(nge[ele])
        return res
```
### Intution
1. next greater element, next smaller element, previous greater element and previous smaller element
2. expression evaluation rec-> iteration

