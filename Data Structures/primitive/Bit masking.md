# Bit masking

**1** -> this bit is **set**


**0** -> this bit is **not set**

lets say I care about only kth bit in a binary number how do I know it?

number = 10101


k = 3

what if I mask the other numbers somehow and get 3rd easily
here what I need to do is & 1 at position k with original number


```
  10101
& 00100
-------
  00100
```
Now I know that the 3rd bit is 1 that is set as answer is non 0

number = 10101


k = 2

```
  10101
& 00010
--------
  00000
```

The result is 0 means that the 2nd bit is not set


so it boils down to 
1. take one 1
2. left shift one by (k-1)
3. then **and** this shifted one with original number
4. if the anwer is 0 then the **k**th bit is not set
5. if the answer is not 0 then the  **k**th bit is set
