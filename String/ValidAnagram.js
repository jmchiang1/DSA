//Valid Anagram (EASY)

//Prompt: Check if 2 strings are valid anagrams

// Solution 1: sort both strings and compare them
// Time: O(N) - loop through n characters in a string
// Space: O(N) - creating new array with "n" length

var isAnagram = function (s, t) {
  let sSorted = s.split("").sort().join("");
  let tSorted = t.split("").sort().join("");

  if (sSorted === tSorted) {
    return true;
  } else {
    return false;
  }
};

// Solution 2: Push letters into hash map and check if 2nd string letters are all present inside 1st string letters
// Time: O(N)
// Space: (O1)
var isAnagram = function (s, t) {
  let hashMap = {};

  if (s.length !== t.length) return false; //if words aren't the same length, return false and exit function

  for (let letter of s) {
    hashMap[letter] ? hashMap[letter]++ : (hashMap[letter] = 1); //add all "s" elements with occurrence inside
  }
  //now hash map contains all "s" letters

  for (let letter of t) {
    hashMap[letter] = hashMap[letter] - 1;
    //if a letter inside "t' word exist in map, decrease count by 1. We want everything to be 0 at the end
  }
  for (let key in hashMap) {
    if (hashMap[key] !== 0) {
      //if any key is not equal to 0, it's automatically not an anagram
      return false;
    }
  }
  return true;
};

/*

https://leetcode.com/problems/valid-anagram/

*/
