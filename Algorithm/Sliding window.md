https://www.geeksforgeeks.org/window-sliding-technique/

https://www.geeksforgeeks.org/sliding-window-problems-identify-solve-and-interview-questions/

fixed/variable window


which will be moving


min/max continuous subsets 


continuous subsets with condotion


n^2 time complexity by brute force can be reduced to n


K - window size


## K

1. Given -> fixed window
2. Asked
   - Bin search on answer + fixed window
   - variable window

## fixed window
1. select left and right in window with given size k
2. moving forward exclude left from ans and add right to the ans
3. check condition

## variable window
1. select window with size 1 (l=0, r =0)
2. increase right as gong forward when condition matched
3. else do l-=1
4. update min/max/res as required
5. https://leetcode.com/problems/fruit-into-baskets/
6. **Here the position of  map[fruits[r]] +=1 is VVIMP**
```
class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        map = defaultdict(int)
        l = 0
        r = 0
        n = len(fruits)
        maxlen =0
        
        while r<n:
            map[fruits[r]] +=1
            while len(map) >2:
                map[fruits[l]] -=1
                if map[fruits[l]]==0:
                    map.pop(fruits[l])
                l+=1
            maxlen = max(maxlen, r-l+1)
            r+=1
                            
        return maxlen
```
## Find number of subarray with given condition
1. find number of subarrays(r-l+1) for condition which is less than or equal **K** use variable window method
2. find number of subarrays(r-l+1) for condition which is less than or equal **k-1**
3. return 2-1
4. **Here the position of   map[nums[r]] +=1 is VVIMP**
5. https://leetcode.com/problems/subarrays-with-k-different-integers/description/

```
class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        n = len(nums)
        def subarraysWithKDistinctOrLess(c):
            if c<0:
                return 0
            l, r, map, cnt=0, 0, defaultdict(int),0
            while r<n:
                map[nums[r]]+=1
                while len(map) > c:
                    map[nums[l]]-=1
                    if map[nums[l]] ==0:
                        map.pop(nums[l])
                    l+=1
                cnt += r-l+1
                r+=1
            return cnt
        return subarraysWithKDistinctOrLess(k)-subarraysWithKDistinctOrLess(k-1)
```
Video : - https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL
For 3rd pattern go to L7




