https://www.youtube.com/watch?v=-urNrIAQnNo&ab_channel=LukasVyhnalek
https://www.youtube.com/watch?v=dBGUmUQhjaM&t=121s

# Trie  [ redix tree, prefix tree ]

1. When we do google the google autocompletes it, this can be done with trie , spellcheck
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

4. Insert ![image](https://github.com/sharayu134/Notes/assets/43854821/cb8c58f2-d19f-493d-936a-39c8c351ff88)
![image](https://github.com/sharayu134/Notes/assets/43854821/90ab0148-25ca-46aa-a4cc-15583f91a579)

5. find ![image](https://github.com/sharayu134/Notes/assets/43854821/47e18790-ce48-4d79-8e6f-8d5253100539)

6. Delete ![image](https://github.com/sharayu134/Notes/assets/43854821/bd6222d9-e7a6-4bab-98ad-b4135c5aa059)
![image](https://github.com/sharayu134/Notes/assets/43854821/6e8a8f8f-2f0d-4709-8380-3d5a99c44a29)


## EASY VERSION use map to store, no need of any other class

```
class Trie:

    def __init__(self):
        self.root = {}
        
    def insert(self, word: str) -> None:
        root = self.root
        for ltr in word:
            if ltr not in root:
                root[ltr] = {}
            root = root[ltr]
        root['*']=''

    def search(self, word: str) -> bool:
        root = self.root
        for ltr in word:
            if ltr not in root:
                return False
            root = root[ltr]
        return '*' in root

    def startsWith(self, prefix: str) -> bool:
        root = self.root
        for ltr in prefix:
            if ltr not in root:
                return False
            root = root[ltr]
        return True
 ```
