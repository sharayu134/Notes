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



