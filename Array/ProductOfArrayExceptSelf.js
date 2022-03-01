// Product of Array Except Self (MEDIUM)

//Prompt: Given an integer array nums, return an array answer such that answer[i] is equal 
//        to the product of all the elements of nums except nums[i].

//Solution 1:  create left and right array, pushing in cumulative product of all left/right side
//Time: O(N)
//Space: O(N)
var productExceptSelf = function(nums) {
    
    let left = [];        //initialize left, right, and output arrays
    let right = [];
    let output = [];
    
    //grab all the product sums left of the current number
    for (let i = 0 ; i < nums.length; i++){    //incrementing loop through array 
        if (left.length === 0){                //if left array is empty, push in 1 at first
            left.push(1)
        } else {
            left.push(left[i-1]*nums[i - 1]);  //else, append to end: previous left num * previous array num 
        }
    }
    
    //grab all the product sums right of the current number
    for (let i = nums.length-1; i >- 1; i--){        //decrementing for loop through array
        if (right.length === 0){
            right.push(1);
        } else {
            right.unshift((right[0]*nums[i + 1]));   //unshift to start: latest num in right arr * next num in arr
        }
    }
    
    //left array * right array to get final numbers
    for (let i = 0; i <left.length; i++){
        output.push(left[i] * right[i])
    }
    return output;
};

/*

INPUT:  [ 1,        2,         3,      4 ]
LEFT:   [ 1,        1*1,       2*1,    3*2=6 ]
RIGHT:  [ 12*2=24,  4*3=12,    4*1=4,  1 ]
OUTPUT: [ 24*1,     12*1=12,   4*2=8,  1*6=6 ]

https://leetcode.com/problems/product-of-array-except-self/

*/