# Topological sort
Topological sort is the sort where we need to order the nodes such that, parent node first before any of it's children
<img width="664" alt="image" src="https://github.com/user-attachments/assets/d98806e2-5cd5-4acf-b572-21f6552b16e4">

## DFS
Do regular dfs but only catch is when you are at the **end of the recursion add that node** in res array 
when you are done with whole dfs reverse the res array [ like adding elements to stack and then popping at last]
 
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

## BFS 
Here the catch is to use indegree when doing queue operations,
set ind array with all the **indegree** and then if it's **zero** meaning the node/s is/are **root** node
add it to res [ ordered list] and then for it's neighbours **reduce** the indegree by one and 
if this child has indegree 0 then this will become next root node we can add it to the queue

```
class Solution:
    
    #Function to return list containing vertices in Topological order.
    def topoSort(self, V, adj):
        q = []
        ind = [0]*V
        res = []
        
        for j in range(V):
            for k in adj[j]:
                ind[k] +=1
                
        for j in range(V):
            if ind[j] == 0:
                q.append(j)
  
            
        while len(q) != 0:
            i = q.pop(0)
            res.append(i)
            
            for chld in adj[i]:
                ind[chld] -=1
                if ind[chld] == 0:
                    q.append(chld)
                
        return res
```
still not getting watch
https://www.youtube.com/watch?v=73sneFXuTEg&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=22&ab_channel=takeUforward
