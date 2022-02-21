//Remove Duplicates from Sorted Array

//Prompt: Given an integer array nums sorted in non-decreasing order.
//Remove the duplicates in-place such that each unique element appears only once.
//The relative order of the elements should be kept the same.

var removeDuplicates = function(nums) {
	let j = 1;
	for (let i = 1; i < nums.length; i++) { //loop starting from position 1, since 1st number is always distinct
		if (nums[j - 1] !== nums[i]) {      //if number at previous j position is different than current number...
			nums[j] = nums[i];              //set j number to curent number
			j++;                            //incrememt j
		}   
	}                                     
	return j;
};

/*
        j-1   j
              i
Input = [ 0   0   1   1   2   2   3   3   4   4   5   5 ]

https://leetcode.com/problems/remove-duplicates-from-sorted-list/

*/