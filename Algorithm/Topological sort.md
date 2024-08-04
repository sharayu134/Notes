# Topological sort
Topological sort is the sort where we need to put parent node first before any of it's children
<img width="664" alt="image" src="https://github.com/user-attachments/assets/d98806e2-5cd5-4acf-b572-21f6552b16e4">

## DFS
Do regular dfs but obly catch is when you are at the end of the recursion add that node in stack 
when you are done with whole dfs pop the stack 
```
class Solution:
    
    #Function to return list containing vertices in Topological order.
    def topoSort(self, V, adj):
        # Code here
        vis = []
        res = []
        
        def dfs(i):
            nonlocal vis
            nonlocal res
            vis.append(i)
            
            for chld in adj[i]:
                if chld not in vis:
                    dfs(chld)
                    
            
            res.append(i)
        
        
        for k in range(V):
            if k not in vis:
                dfs(k)

        return res[::-1]
```

still not getting watch https://www.youtube.com/watch?v=5lZ0iJMrUMk&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=21&ab_channel=takeUforward
