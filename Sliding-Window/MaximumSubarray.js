//MAXIMUM SUBARRAY (EASY)

// Prompt: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {
    let maxCurr = nums[0];  //current maximum and current Global both start at 0
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++){  //iterate starting from 1, not 0
        maxCurr = Math.max(nums[i], maxCurr + nums[i])
        //maxCurrent set to the higher num between maxCurrent or maxCurrent + current num (subArray)
        
        if (maxCurr > maxGlobal){
            maxGlobal = maxCurr     //maxGlobal is set to the highest number between the 2 numbers
        }
    }
    return maxGlobal    //return maxGlobal
};

/*
input = [ 1   2   3   -5   4 ]
                           i 

maxCurr   = 1 --> 3 --> 6 --> 1 --> -3
maxGlobal = 1 --> 3 --> 6 --> 6 --> 6

maxCurr = Math.max(2, (1 + 2)) = 3
maxCurr = Math.max(3, (3 + 3)) = 6

maxCurr = Math.max(-5, (-5 + 6)) = 1
maxCurr = Math.max( 4, (-4 + 1)) = -3

https://leetcode.com/problems/maximum-subarray/

*/