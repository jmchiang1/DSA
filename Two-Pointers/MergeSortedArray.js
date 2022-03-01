//Merge Sorted Array (EASY)

//Prompt: You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.


var merge = function(nums1, m, nums2, n) {
    let first = m - 1     //first = last number in first array
    let second = n - 1;   //second = last number in second array
    
    for (let i = m + n -1; i >= 0; i--){        //decrementing loop through the length of both arrays (m + n -1)
        if (second < 0){                        //if second pointer is < 0, we have traversed entire nums2 so break out of function 
            break;
        }
        if (nums1[first] > nums2[second]){      
            nums1[i] = nums1[first];
            first--;
        } else {                                //if nums1[first] < nums2[second]...
            nums1[i] = nums2[second]            //last current num in nums1 is replace with nums2[second]
            second--;   
        }
    }
    return nums1;
};

/*
                   first           i
nums1 = [ 1    2     3    0    0   0 ]

                  second
nums2 = [ 2    5     6               ]

https://leetcode.com/problems/merge-sorted-array/

*/