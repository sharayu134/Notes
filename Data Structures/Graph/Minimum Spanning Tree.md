
# MST

1. connects all the nodes, min weight, no cycles
2. can be solved using Union find
3. can be solved using prims algo

## Prims
1. track visited, number of visited nodes should be n-1 as there should not be any cycles
2. use Priority Queue to dicide who is next, priority based on weight
3. select 0th node, all the edges of the node and weight to the queue
4. pop the q till visited reaches n-1
5. we should not visit a visited node,  if not visited mark visited, add the weight, add the edge
