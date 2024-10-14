# Represantation
Tree can be represented by two ways array and treenode
choose the datastructure which makes life easier if given a chance,
for example using treenode instead of array will decrease the index calculation

## Array 
```
 p is parent index
 left_child = (2*p)+1; 
 right_child = (2*p)+2;
 p  = (child - 1) // 2
```
## TreeNode
 ```
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```
