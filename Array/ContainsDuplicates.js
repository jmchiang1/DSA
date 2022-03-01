// Contains Duplicates (EASY)

//Prompt: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//Solution 1: Push numbers into dictionary and check key for duplicates
//Time: O(N)
//Space: O(N)
var containsDuplicate = function(nums) {
    let dict = {};
    
    for (let num of nums){
        dict[num] ? dict[num]++ : dict[num] = 1
    }
    
    for (let key in dict){
        if (dict[key] >= 2){
            return true
        }
    }
    return false;
};

//Solution 2: Sort and loop until you find 2 adjacent numbers that are the same
//Time: O(N) + O(LogN)
//Space: O(N)
var containsDuplicate = function(nums) {
    
    nums.sort((a,b)=>a-b);  //sort nums array
    
    for(let i=0; i<nums.length; i++){
       if(nums[i] === nums[i+1]) return true;   //if a number is equal to the next number, return true
    }
    return false;   //return false if nothing satisfies the condition
};

/*

https://leetcode.com/problems/contains-duplicate/

*/