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
more on code details


https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=detect-cycle-in-an-undirected-graph


video on topic
https://www.youtube.com/watch?v=zQ3zgFypzX4&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=13

# using BFS
```
from typing import List
class Solution:
    #Function to detect cycle in an undirected graph.
	def isCycle(self, V: int, adj: List[List[int]]) -> bool:
	    vis = set()
	    
	    def dfs(cur, src):
	        if cur in vis:
	            return True
            vis.add(cur)
            for nei in adj[cur]:
                if nei!=src:
                    if dfs(nei,cur):
                        return True
            return False
	       
	        
		for k in range(V):
		    if k not in vis:
		        if dfs(k,-1):
		            return True
		
		return False


#{ 
 from typing import List
class Solution:
    #Function to detect cycle in an undirected graph.
    def isCycle(self, V: int, adj: List[List[int]]) -> bool:
        vis = set()
        def bfs(s):
            nonlocal vis
            q = [(s,-1)]
            
            while q:
                cur, src = q.pop(0)
                if cur in vis:
                    return True
                vis.add(cur)
                for nei in adj[cur]:
                    if nei != src:
                        q.append([nei, cur])
        for k in range(V):
            if k not in vis:
                if bfs(k):
                    return True
        
        return False

```
https://www.youtube.com/watch?v=BPlrALf1LDU&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=11&ab_channel=takeUforward  
