//Missing Number (EASY)

//Prompt: Given an array nums containing n distinct numbers, return the only number in the range that is missing from the array.

// Solution 1: Sort then loop
// Time: O(N)
// Space: O(N) - Creating new stack of N length
var missingNumber = function(nums) {
  nums = nums.sort((a,b) => a-b);
  
  for (let i = 0; i <= nums.length; i++){
      if (i !== nums[i]){
          return i;
      }
  }
};

/*

Input = [3,0,1] --> [ 0, 1, 3 ]
Output = 2

https://leetcode.com/problems/missing-number/

*/
