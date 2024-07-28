https://www.youtube.com/watch?v=IpyCqRmaKW4

# Tree 
### undircted acyclic connected graph 
### connected grapn with n nodes and n-1 edges
### Graph with any two vertices can be connected to only one path

## Tree order Traversal

1. **Preorder** < root >< left >< right > 
2. **Inorder** < left >< root >< right > 
3. **Postorder** < left >< root >< right >

```     void getOrder(TreeNode root){
        if(root==null)
            return;
            // root printed/used here inorder 
        getOrder(root.left);
            // root printed/used here preorder
        getOrder(root.right);
            // root printed/used here postorder
    }
```


Since each node in the binary tree is visited exactly once, and the operations performed at each node take constant time, the overall time complexity of the function is:
O(n)

The space complexity is determined by the call stack used in the DFS traversal. In the worst case, the depth of the tree could be 𝑛 (for a completely unbalanced tree skewed tree)

O(h)
where h is the height of the tree. For a balanced tree, h would be 𝑂 (log n)

