only see pq

1. have a min distance array for each node with infinity distance 
2. slect 0 as starting node and distance 0
3. now add this to the pq
4. starrrt popping the pq while pq
5. start exploring the current node
6. add it's distance with distance which we got from parent to pq
7. only **if** the current distance till this node is less than the distance in distance array, update the distance array when you get smaller distance 
8. keep doing this while pq is not empty 

```
from typing import List
class Solution:

    def dijkstra(self, V: int, adj: List[List[int]], S: int) -> List[int]:
        dist = [float('inf')]*V
        dist[S] = 0
        pq = [(S,0)]
        
        while pq:
            node, cur_dis = pq.pop(0)

            for nei in adj[node]:
                n_node = nei[0]
                next_dis = cur_dis+nei[1]
                if dist[n_node] > next_dis:
                    dist[n_node] = next_dis
                    pq.append((n_node, next_dis))
                    
        return dist
```
https://www.youtube.com/watch?v=3dINsjyfooY&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=35&ab_channel=takeUforward

https://www.youtube.com/watch?v=3dINsjyfooY&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=35&ab_channel=takeUforward


In most practical implementations, a min-heap is used, resulting in a time complexity of O((V + E) log V).


this algo can be modified something else than distance 


https://leetcode.com/problems/cheapest-flights-within-k-stops/
