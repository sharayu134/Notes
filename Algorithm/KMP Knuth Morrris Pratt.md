# KMP

1. from O(n*m) or O(n^2) to O(n+m) for string search
2. create LPS = Longest Prefix Suffix
3. search for the needle with LPS array
4. in LPS save the current longest prefix suffix
5. https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
6. https://www.youtube.com/watch?v=JoF0Z7nVSrA&ab_channel=NeetCode

## creating LPS array

for first chracter as len of suf/pref cannot be same as string so it's 0
1. lps_prev = 0, i=1
2. if they match, increment everything
3. if they don't then set  prev_lps = lps[prev_lps-1]
4. if prev_lps = 0, set lps[i] to zero as well move on

## Serching 

1. If they match, increment all
2. if they don't decreament lps/j  j = lps[j-1]
3. if j ==0, increment i+1

```
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        n = len(haystack)
        m = len(needle)
        lps = [0] * m
        prev_lps = 0
        i=1
        while i<m:
            if needle[prev_lps] == needle[i]:
                lps[i] = prev_lps+1
                prev_lps+=1
                i+=1
            elif prev_lps==0:
                lps[i] = 0
                i+=1
            else:
                prev_lps = lps[prev_lps-1]

        i=0
        j=0
        while i < n:
            if haystack[i] == needle[j]:
                i+=1
                j+=1
            else:
                if j == 0:
                    i+=1
                else:
                    j = lps[j-1]
            if j==m:
                return i-m
        return -1
        
```
