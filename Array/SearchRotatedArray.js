//Search in Rotated Sorted Array (MEDIUM)

// Prompt: Given the array nums after the possible rotation and an integer target,
//         return the index of target if it is in nums, or -1 if it is not in nums.


//Solution: Binary Search of subarrays 
//Time: O(LogN)
//Space: O(1)
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right){
        let mid = Math.floor((left + right) / 2);   //define mid point
        if (nums[mid] === target) return mid;       //if mid point = target, return it and exit function
        
        //determine which segment is sorted
        if (nums[left] <= nums[mid]){               //if left is less than mid, left side is sorted
            if (nums[left] <= target && target <= nums[mid]){   //if target is between left and midpoint, 
                right = mid - 1;                    //move right pointer mid - 1
            } else {                                //if target is not between left and midpoint, 
                left = mid + 1;                     //move left to other side
            }
        } else {                                    //if left is not less than mid, than right side is sorted
            if (nums[mid] <= target && target <= nums[right]){    //if target is between mid and right...
                left = mid + 1;                                   //move left to mid + 1
            } else {                                              //if target is not between mid and right...
                right = mid - 1;                                  //move right to other side 
            }
        }
    }
    return -1;  //return -1 if nothing satisfies the above code
};

/*

         L           M           R
nums = [ 4,  5,  6,  7,  0,  1,  2 ]
target = 1

https://leetcode.com/problems/search-in-rotated-sorted-array/

*/