
# MST
<img width="322" alt="image" src="https://github.com/user-attachments/assets/12560efc-1efa-45ae-8e58-6f6563d3e7f4">

1. connects all the nodes, min weight, no cycles, n-1 edges
2. can be solved using Union find
3. can be solved using prims algo

## Prims
1. track visited, number of visited nodes should be n-1 as there should not be any cycles
2. use Priority Queue to dicide who is next, priority based on weight
3. select 0th node, all the edges of the node and weight to the queue as (weight, source node, dest node)
4. pop the q
5. explore the neighbours of dest node,
6. we should not visit a visited node, and not the node it came from
7. if not visited mark visited, add the weight, add the edge

  ```
import heapq
class Solution:
    
    def spanningTree(self, V, adj):
        vis = set()
        res = 0
        pq = [(0,0)]
        
        while pq:
            wt, cur  = heapq.heappop(pq)
            if cur in vis:
                continue
            vis.add(cur)
            res+=wt
            
            for nei in adj[cur]:
                n, n_wt = nei
                if n not in vis:
                   heapq.heappush(pq, (n_wt, n))
                   vis.add(cur)

        return res
```
9. https://www.youtube.com/watch?v=mJcZjjKzeqk&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=45&ab_channel=takeUforward
10. https://leetcode.com/problems/min-cost-to-connect-all-points/description/
