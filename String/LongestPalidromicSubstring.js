//Longest Palindromic Substring (MEDIUM)

//Prompt: Given a string s, return the longest palindromic substring in s.

// Solution: expand from center for odd / even substring and keep track of longest palindrome, then return it
// Time: O(N)
// Space: O(N)
var longestPalindrome = function(s) {
    if (s.length < 1 || s === null) return "";           // if string length is less than 1 or doesn't exist, return ""
    
    let longest = "";
    
    for (let i = 0; i < s.length; i++){

        let odd = expand(i, i, s);                       // when expanding for odd numbers, point at the same location: i
        let even = expand(i-1, i, s);                    // when expanding for even numbers, point at 2 adjacent location: i and i - 1;     
  
       if (odd.length > longest.length) longest = odd;       // if odd is longer than longest, update odd to longest
       if (even.length > longest.length) longest = even;     // if even is longer than longest, update even to longest
    }
    return longest;                                          // Final return statement
};

function expand (left, right, s){                            // helper function that will expand each character
    let i = 0;                                               // starts at 0 and checks for palidromes
    while (s[left - i] && s[right+i] && s[left - i] === s[right + i ]){    // while both pointers exist AND the left/right pointer are the same value...
        i++;                                                 // then expand in both directions
    }
        i--;                                                 // if we hit this decrement, that means the palindome ends and we need to go back one space
    return s.slice(left - i, right + i + 1);                 // return entire string inside the left and right pointer positions
}                                                            // slice() doesn't include the end value so we add 1 to add it back     

/*

        Null    A    B    A    Null
STEP 1               ^
                     ^

STEP 2          ^         ^     

STEP 3   ^                      ^
STEP 4          ^         ^        <-- FINAL ANSWER


https://leetcode.com/problems/longest-palindromic-substring/

*/
