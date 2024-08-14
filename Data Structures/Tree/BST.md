# Binary Search Tree

## Inorder traversal of BST will print elements in order

1. It's A Binary tree -> with at most two roots, [can have 0,1,2 roots]
2. where left values are smaller than root and right values are greater
3. BST is not limited to only numbers tree it can be alphabet as well
4. ![image](https://github.com/sharayu134/Notes/assets/43854821/24157ed9-9114-4830-8d51-20b23abe205d)  _  it's not as 9 is greater than 8/root
5. Complexity fpr every operation  is log(n) -> height of the tree worst is O(n) when tree is line
6. Insertion -> start with root compare with root small go to left if greater go to right if null insert new node
7. find -> compare with root value if smaller got to left if greater got to right if equal return 0 if null return -1 not found
8. Inorder traversal will print all the element in order as BST will have smallest element in leftmost leaf 
9. Remove -> find the value to be removed as Node
   * If Node is null remove the node directly no impact
   * If one of the subtree of Node is null then make the one and only one subtree as next of Node's parent [right or left is null]
   * If both the trees are present the we have two options to replace the Node
    a. largest in left subtree
    b. smallest in right subtree
    Replace When you choose one of them, then you will have to do the same to remove as above

## tree traversal can be simulated with stack do visit
## https://leetcode.com/problems/binary-search-tree-iterator/description/?envType=company&envId=google&favoriteSlug=google-thirty-days

