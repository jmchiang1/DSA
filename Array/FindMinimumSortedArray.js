//Find Minimum in Rotated Sorted Array (MEDIUM)

// Prompt: Given the sorted rotated array of unique elements,
//         return the minimum element of this array.


//Solution: Binary Search of subarrays 
//Time: O(LogN)
//Space: O(1)
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    if (nums.length === 1) return nums[0]   //edge case;
    if (nums[left] < nums[right]) return nums[0]   //edge case
    
    while (left < right){
        let mid = Math.floor((left + right) / 2);
        
        //code will run if midpoint is at inflection point 
        if (nums[mid] > nums[mid + 1]){         //if mid > mid+1, then mid+1 is the inflection point
            return nums[mid + 1]                //this the lowest num
        } else if (nums[mid - 1] > nums[mid]){  //if mid-1 is more than mid, this is inflection point
            return nums[mid];
        }
        
        //if midpoint is not at inflection point, run this code
        if (nums[mid] > nums[left]){    //if array is sorted on left side and we havent found min number yet...
            left = mid + 1;             //search on the right side 
        } else {
            right = mid - 1;            //else search on the left side
        }
    }
};

/*

        L       M           R
nums = [4,  5,  6,  7,  0,  1]

min = 1

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

*/