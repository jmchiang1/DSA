// Longest Substring Without Repeating Characters (MEDIUM)

//Prompt: Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {

    let set = new Set();    //set is an object that lets you store unique values, duplicates not allowed
    let left = 0;           //left and right pointer both start at 0 position
    let right = 0;
    let maxString = 0;
    
    while (right < s.length){        //while right pointer is inside the string
        if (!set.has(s[right])){     //if right pointer's number is not in the set, add it 
            set.add(s[right]);      

            maxString = Math.max(maxString, set.size);    //maxString = max number between current set size and maxString
            right++;                //expand window to the right
        } else {                    //if the current number is already in the set...
            set.delete(s[left]);    //delete left number from the set since it's the same as the current number on the right
            left++;                 //decrease the window on the left side
        }
    }
    return max;
};

/*

input = A   B   C   A
        |--->|
        |------->|
        |----------->|
            |------->|

set = { A             }
      { A   B         }
      { A   B   C     }
      {     B   C   A }


https://leetcode.com/problems/longest-substring-without-repeating-characters/

*/