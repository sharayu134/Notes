# Undirected graph cycle detection


## using dfs

1. pass a node i and parent p
2. mark node i visited
3. go to the node and explore it's neighbours
4. if neigbour not visited go on in dfs
5. if neighbour visited then it could be cycle 
6. but but but but it could be parent as well as it's undirected graph [a->b] is edge aslo [b->a] is present 
7. so if neighbour is not parent then it's a cycle

```
        def dfs(k, p):
            nonlocal vis
            vis.add(k)
            for ele in adj[k]:
                if ele not in vis:
                    if dfs(ele,k):
                        return True
                elif ele!=p:
                    return True
            return False
            # call this DFS for each node which is not yet visited as it could be graph which is not connected

            
```
https://www.youtube.com/watch?v=zQ3zgFypzX4&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=13
  
