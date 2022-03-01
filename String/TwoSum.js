const twoSum = function(nums, target) {

    let sortedarr = [...nums].sort((a,b) => a - b);
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
           return [nums.lastIndexOf(sortedarr[left]), nums.indexOf(sortedarr[right])]
           //use lastIndexOf because "arr" has been sorted and the index is no longer correct, unless we use the original "nums" array
	}
    }
};

/*

POINTERS   L           R
NUMS     [ 1  4  6  9  3 ]
TARGET   [ 10 ]

*/