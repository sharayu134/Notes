https://www.youtube.com/watch?v=-urNrIAQnNo&ab_channel=LukasVyhnalek

# Trie  [ redix tree, prefix tree ]

1. When we do google the google autocompletes it, this can be done with trie
2. This is how trie node will look like (keys are usually string)
```
class Node{
  HashMap<Character, Node> children = new HasMap();
  boolean isWord;
  } 
  ```![image](https://github.com/sharayu134/Notes/assets/43854821/49a259bc-34fd-44f8-ba09-e08546baf5ac)

 3. Root node will have the all the starting characters as children 
 
