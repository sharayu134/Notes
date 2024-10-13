go [here](https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns)


https://www.youtube.com/watch?v=vRVfmbCFW7Y


https://www.naukri.com/code360/problems/matrix-chain-multiplication_975344?source=youtube&campaign=striver_dp_videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_dp_videos&leftPanelTabValue=SUBMISSION

# Intuition
1. maximum/minmum
2. few choices are given
3. previous answer can be used to calculate current value same for all values
4. expecetd answer may be number
5. 2 strigs are given


## Implementation
1. Recursive soln (**minimize the state variabls as much as possible**)
2. convert to memo (one state variable is 1D-DP, two state variables is 2D-DP)
3. memo to tablulation (start from end)
4. **Base case is very important in dp, ask yourslef what is the smallest problem you want to solve** 
