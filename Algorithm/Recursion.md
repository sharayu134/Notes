# Recursion:

1. Stop condition
2. State of recursion that is what you are passing

## When making choices
1. 0/1 knapsack problems you need to select a element or not select an element
   this can be achieved by
   ```
   dfs(i+1, sum+num[i])
   dfs(i+1, sum)
    ```
