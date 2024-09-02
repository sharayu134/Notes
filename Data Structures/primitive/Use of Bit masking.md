Bit masking can be used where we can decrease the time complexity from n! or n*2^n to n^2 specially in backtracking, this will decrease a lot onnspace as well


https://leetcode.com/poblems/subsets/description/


normal flow 
```
 def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res = []
        def rec(i, hasVisited):
            nonlocal res
            if i>=n:
                res.append(hasVisited)
                return
            rec(i+1,hasVisited[::])
            hasVisited.append(nums[i])
            rec(i+1,hasVisited[::])

        rec(0,[])
        return res
```

with bitmasking 

```
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res = []
        
        for i in range(0,1<<n): # run 2**n time [1<<n is equal to 2**n]
            ans = []
            k = 1
            j = 1
            while k < (2**n): [this is run n times]
                cur = i&k
                k = k<<1
                if cur != 0:
                    ans.append(nums[j-1])
                j=j+1
            res.append(ans[::])
    
        return res
```

| param | without bitmaskig | with bitmasking |
| ------|-------------------|------------------|
| time complexity | n*2^n (to select or not select) | n*2^n, 2 loops|
| space complexity | O(n) + output | 0(1) + output |
