//3Sum (MEDIUM)

// Prompt: Given an integer array nums, return all the triplets such that they add up to 0. 
// Notice that the solution set must not contain duplicate triplets.
// Paramters: i != j, i != k, j != k


//Solution: 2 pointers and sorting
//Time: O(N)
//Space: O(1)
var threeSum = function(nums) {    
    const result = [];
    if (nums.length < 3) return result;
    nums.sort((a,b) => a-b);
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i-1]) continue; //2 adjacent nums cant be the same
        let start = i + 1;  
        let end = nums.length - 1;
        
        //move the start and end pointers first, then "i" at the last step
        while (start < end){
            const sum = nums[i] + nums[start] + nums[end];  //define sum
            if (sum === 0){     //if sum equals to 0, push nums into results array...
                result.push([nums[i], nums[start], nums[end]]);
                start++;        //and move both pointers in
                end--;
                
                //if any adjacent numbers are the same, move 1 down
                while ( start < end && nums[start] === nums[start-1]) start++;
                while ( start < end && nums[end] === nums[end+1]) end--;
            } 
            else if (sum < 0) start++   //if sum < 0, make it bigger
            else if (sum > 0) end--     //if sum > 0, make it smaller
        }
    }
    return result;
};

/*

nums =   [-1, 0, 1, 2, -1, -4]
sorted = [-4, -1, -1, 0, 1, 2]

sum = i + start + end
sum = -4 + -1 + 2 = -3
sum = -4 + -1 + 2 = -3
sum = -4 + 0 + 2 = -2
sum = -4 + 1 + 2 = -1
sum = -1 + -1 + 2 = 0 <-- answer
sum = -1 + 0 + 1 = 0  <-- answer
sum = 0 + 1 + 2 = 3

Resuls = [-1, -1, 2]
Resuls = [-1, 0, 1]

https://leetcode.com/problems/3sum/

*/