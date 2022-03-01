//Maximum Product Subarray (MEDIUM)

// Prompt: Given an integer array nums, find a contiguous non-empty subarray within the array 
//         that has the largest product, and return the product.

//Solution: DP - Check min and max value at each incremental value 
//Time: O(N)
//Space: O(1)
var maxProduct = function(nums) {

    let maxGlobal = nums[0];    //keep track of actual largest value
    let maxCurr = nums[0];      //keep track of current largest value
    let min = nums[0];          //keep track of minimum value
    
    for (let i = 1; i < nums.length; i++) {       //loop starting at position 1
        const tempMaxCurr = maxCurr * nums[i];    //create variable to store maxCurr value, since it will overridden later
                                                  //maxCurr is first num * current num
        
        maxCurr = Math.max(nums[i], tempMaxCurr, min * nums[i]);    //max between current num, maxCurr, min value
        min = Math.min(nums[i], tempMaxCurr, min * nums[i]);        //min value between the 3 values
        maxGlobal = Math.max(maxCurr, maxGlobal);                   //actual max between maxCurr and maxGlobal
    }
    return maxGlobal;    //return maxGlobal at the very end
}

/*
             i
nums = [ 2,  3,  -2, 4 ]
        MG
        MC
        Mn
i = 3
TMC = 2 * 3 = 6
MC = Math.max(3, 6, 3 * 2) = 6
min = Math.min(3, 6, 3 * 2) = 3
MG = Math.max(6, 2) = 6

i = -2
TMC = 6 * -2 = -12
MC = Math.max(-2, -12, 3 * -2) = -2
min = Math.min(-2, -12, 3 * -2) = -12
MG = Math.max(-2, 6) = 6 --> nothing changes since previous maxGlobal is still the largest num

i = 4
TMC = -2 * 4 = -8
MC = Math.max(4, -8, -12 * 4) = 4
min = Math.min(4, -8, -12 * 4) = -48
MG = Math.max(4, 6) = 6 --> nothing changes since previous maxGlobal is still the largest num

https://leetcode.com/problems/maximum-product-subarray/

*/