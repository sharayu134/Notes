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

### Intution
1. next greater element, next smaller element, previous greater element and previous smaller element
2. expression evaluation rec-> iteration

