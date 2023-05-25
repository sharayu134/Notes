https://www.youtube.com/watch?v=-urNrIAQnNo&ab_channel=LukasVyhnalek

# Trie  [ redix tree, prefix tree ]

1. When we do google the google autocompletes it, this can be done with trie
2. This is how trie node will look like (keys are usually string)
```
class Node{
  HashMap<Character, Node> children = new HasMap();
  boolean isWord;
  } 
  ```
  
 ![image](https://github.com/sharayu134/Notes/assets/43854821/49a259bc-34fd-44f8-ba09-e08546baf5ac)

 3. Root node will have the all the starting characters as children 

The complexity of creating a trie is O(W*L), where W is the number of words, and L is an average length of the word: you need to perform L lookups on the average for each of the W words in the set.

Same goes for looking up words later: you perform L steps for each of the W words.

Hash insertions and lookups have the same complexity: for each word you need to check equality, which takes O(L), for the overall complexity of O(W*L).

 
