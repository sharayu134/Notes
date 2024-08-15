https://www.geeksforgeeks.org/binary-search-identify-solve-and-interview-questions/

Let's review binary search a bit. Given a sorted array, binary search works by looking at the middle element of the given array, and based on the value of the middle element, it decides to discard one half of the array. At each step, we reduce the length of the array to search by half and that is what leads to the logarithmic time complexity of the algorithm. Usually, we employ the binary search algorithm to determine if an element is in a sorted array. Here, we can tweak the binary search algorithm to find the first and the last position of a given element.


Let's look at the basic binary search algorithm one step at a time:


We use 2 variables to keep track of the subarray that we are scanning. Let's call them begin and end. Initially, begin is set to 0 and end is set to the last index of the array.
We iterate until begin is greater than end.
At each step, we calculate the middle element mid = (begin + end) / 2. We use the value of the middle element to decide which half of the array we need to search.
If the target that we're searching for has a value lower than the mid element, we discard the right half of the array i.e. end = mid - 1.
If the target that we're searching for has a value higher than the mid element, we discard the left half of the array i.e. begin = mid + 1.
If nums[mid] == element, then we found our target and we return from there.
