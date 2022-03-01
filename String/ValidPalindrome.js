//Valid Palindrome (EASY)

//Prompt: Given a string s, return true if it is a palindrome, or false otherwise.

// Solution: Helper function with 2 pointers
// Time: O(N)
// Space: O(1)
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (!isValidCharacter(s[left])) {
      //if left character is not valid, move left pointer up
      left++;
    }

    while (!isValidCharacter(s[right])) {
      //if right character is not valid, move right pointer down
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      //if both characters are valid but they dont equal each other, return false
      return false;
    }

    left++; //if both characters are valid and they do equal to each other, move both pointers
    right--;
  }
  return true; //return true at the end as both pointers are now pointing to the same place, meaning the whole string is valid
};

let isValidCharacter = function (char) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"; // valid characters are only letters and numbers, no special chaaracters or spaces

  return alphabet.indexOf(char.toLowerCase()) > -1; //if character is valid, return the lowercase version of it
};

//indexOf() returns -1 if the character is not in the string

/*
           L             R
             L         R
               L     R
                 L R            "a" and "e" aren't the same letter, return false and exit function
Input =  " r a c e a c a r "

https://leetcode.com/problems/valid-palindrome/

*/
