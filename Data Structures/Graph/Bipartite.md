 # Bipartite

## Divide in two parts such that
## Color adj nodes with alternte two colors 
## and the color of two adjcent nodes should not be same

https://leetcode.com/problems/is-graph-bipartite/description/

# BFS
1. get one colors array
2. take it as forest - > for each node if not colored do this
3. Color selected node
4. add to Q
5. while Q
6. pop the node
7. for each adjcent node if not colored color with opposite color of parent and push to Q
8. If colored, then if adjcent node has same color as the parent then return False
9. in main for loof if any of the node returns false ans is false
10. return true otherwise
11.  
```
class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        n = len(graph)
        clrs = [-1]* n

        def isB(v):
            clrs[v] = 1
            q = [v]
            while q:
                cur = q.pop(0)
                col = clrs[cur]
                for nei in graph[cur]:
                    if clrs[nei] == -1:
                        clrs[nei] = not col
                        q.append(nei)
                    elif clrs[nei] == col:
                        return False
            return True

        for i in range(n):
            if clrs[i]==-1:
                if not isB(i):
                    return False
        return True
```
https://leetcode.com/problems/is-graph-bipartite/
