# Detecting Cycle in Directed Acyclic graph

## DFS
Do the normal dfs, twist is to keep the pathvisited array 


whenever you visit the node mark it as visited and pathvisited


whenever you complete exploring the node make its pathvisited as 0 not visited


If you are exploring the child if it's visited and not pathvisited it's valid othervise not valid

```

class Solution:
    def isCyclic(self, V : int , adj : List[List[int]]) -> bool :
        
        vis = [0]*V
        path = [0]*V
        
        def dfs(i):
            nonlocal path
            nonlocal vis
            vis[i] = 1
            path[i] = 1
            
            for ele in adj[i]:
                if vis[ele] == 0:
                    if dfs(ele):
                        return True
                else:
                    if path[ele] == 1:
                        return True
                        
            path[i] = 0
            return False
            
        for i in range(V):
            if vis[i] == 0:
                if dfs(i):
                    return True
                    
        return False
```

still not getting it no worries https://www.youtube.com/watch?v=9twcmtQj4DU&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=20&ab_channel=takeUforward

## EASY BFS

In BFS use topological sort if the sorted array has less number of elements then it definitley has cycle as topo sort works only for DAG
[go here](https://github.com/sharayu134/Notes/blob/cd6127252f575aafd72d2173ff88f100c4861b6f/Algorithm/Topological%20sort.md?plain=1#L4)
