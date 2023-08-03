Move all zeros present in an array to the end
Given an integer array, move all zeros present in it to the end. The solution should maintain the relative order of items in the array and should not use constant space.

For example,

Input:  { 0i, 0j, 0, 2, 3, 0, 4, 0, 1 }
            5 0 8 
Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 }

int j= 0;

for(int i=0; i<nums.length;i++ ){
    if(nums[i]==0) {continue};
    else{
        int temp = nums[i];//0
        nums[i] = nums[j];//6
        nums[j] = temp; //0
        j++;
    }
}
Move all zeros present in an array to the end
Given an integer array, move all zeros present in it to the end. The solution should maintain the relative order of items in the array and should not use constant space.

For example,

Input:  { 6, 0, 8, 2, 3, 0, 4, 0, 1 }
 
Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 }
Sudev R V3:40 PM
1. var a = 25
var b = a
b =30
console.log(a);
2. var book = {
name: "Just React",
year:2022
}
var nextBook = book;
book.year = 2023;
console.log(nextBook);
Sudev R V3:42 PM
const book = {
name: "Just React",
year:2022
}
const nextBook = book;
book.year = 2023;
console.log(nextBook);
