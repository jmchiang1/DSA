//MAXIMUM SUBARRAY (EASY)

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
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

// https://leetcode.com/problems/maximum-subarray/