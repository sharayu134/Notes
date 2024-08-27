1.  consists only of lowercase English letters. can lead to use hashmap with size 26 as 26 is better than 10^6 https://leetcode.com/problems/number-of-same-end-substrings/description/\

   ## If given problem does includes string whats it can be
1. sliding window
2. two pointers
3. DP
4. sort

# prefix sum
1. In prefix sum you will need to perform the task on subsets of array(continuous)
2. sum the prefix array
3. sum(2,5)  = pref[5] - pref[2-1] //indexes
4. Here you can further optimise my saving the results in hashmap
5. https://leetcode.com/problems/subarray-sum-equals-k/description/
6. https://leetcode.com/problems/contiguous-array/
