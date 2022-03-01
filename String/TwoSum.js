//Two Sum (EASY)

// Solution 1: Double For Loop
// Time: O(N^2)
// Space: (O1)
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// Solution 2: two pointers
// Time: O(N)
// Space: (O1)
const twoSum = function (nums, target) {
  let sortedarr = [...nums].sort((a, b) => a - b);
  // [..nums] creates a separate sorted array without modifying the original one
  let left = 0;
  let right = nums.length - 1;
  let total = 0;

  while (left < right) {
    total = sortedarr[left] + sortedarr[right];
    if (total < target) {
      left++;
    } else if (total > target) {
      right--;
    } else {
      return [
        nums.lastIndexOf(sortedarr[left]),
        nums.indexOf(sortedarr[right]),
      ];
      //use lastIndexOf because "arr" has been sorted and the index is no longer correct, unless we use the original "nums" array
    }
  }
};

// Solution 3: Hash-map and look for key value pair
// Time: O(N) - single for loop
// Space: O(N) - objects hold "n" elements
var twoSum = function(nums, target) {
    let map = {};
    
    for (let i = 0; i < nums.length; i++){
        
        let value = nums[i];                     //value = current number
        let complement = target - value;         //complement = complement number for each current num in the nums array
      
        if (map[complement] !== undefined){      //if a complement num is inside the map
            return [map[complement], i]          //then return an array with index;
        } else {
            map[value] = i;        //if the complement is not inside map, record current num's value as well as the index it belongs to. 
                                   //we will hit this statement everytime until we have a complement inside the map object.
                                   //then we will hit the first if statement and see if a complement of that number exist.
        }
    }
}

/*

POINTERS   L           R
NUMS     [ 1  4  6  9  3 ]
TARGET   [ 10 ]

*/
