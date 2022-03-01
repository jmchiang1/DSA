//Container With Most Water (MEDIUM)

// Prompt: Given an integer array height of length n, find the the first 2 lines that together with
//         the x-axis form a container with the most water. 


//Solution: 2 pointers and compare
//Time: O(N)
//Space: O(1)
var maxArea = function(height) {
    let area = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right){
        const length = right - left                         //distance between 2 points
        const peak = Math.min(height[left], height[right])  //min height between 2 points
        const tempArea = length * peak;
        area = Math.max(area, tempArea);                    //assign largest current area
        if (height[left] > height[right]){                  //move the shorter value based on height since the peak is determined by the shorter value
            right--;
        } else {
            left++;
        }
    }
    return area;
};

/*

             L   R
water = [1,  8,  6,  3,  7]
distance = 4 --> 3 --> 2 --> 1
peak = 1 --> 7 --> 3 --> 6
area = 4 --> 21 --> 21 --> 21

https://leetcode.com/problems/container-with-most-water/

*/