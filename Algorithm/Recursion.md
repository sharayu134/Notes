# Recursion:

1. Stop condition
2. State of recursion that is what you are passing

## When making choices

[example](https://leetcode.com/problems/partition-equal-subset-sum/)
1. 0/1 knapsack problems you need to select a element or not select an element
   this can be achieved by
   ```
   dfs(i+1, sum+num[i])
   dfs(i+1, sum)
    ```

   ```
   class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total, n = sum(nums), len(nums)
        memo= {}
        if total%2:
            return False

        target = total // 2

        def dfs(i, cursum):
            if (i, cursum) in memo:
                return memo[(i, cursum)]
            if i >= n:
                return False
            if cursum == target:
                return True
            if cursum> target:
                return False
            res1 = dfs(i+1, cursum+nums[i]) 
            res2 = dfs(i+1, cursum)
            memo[(i, cursum)] = res1 or res2
            return memo[(i, cursum)]
        
        return dfs(0, 0)

   ```
