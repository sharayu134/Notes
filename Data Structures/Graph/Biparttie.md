 # Biparttite

## Divide in two parts / color adj nodes with alternte two colors and colors should not repeat

https://leetcode.com/problems/is-graph-bipartite/description/

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
