//Valid Parentheses (EASY)

//Prompt: Check if 2 strings are valid anagrams

// Solution: push and pop elements off stack and compare
// Time: O(N)
// Space: O(N)
var isValid = function(s) {
    
  if (s.length %2 !== 0) return false;
  let stack = [];
  
  for (let i = 0; i < s.length; i++){
      if (s[i] === ")" && stack[stack.length - 1] === "(" ){
          stack.pop()
      } else if (s[i] === "]" && stack[stack.length - 1] === "[" ) {
          stack.pop()
      } else if (s[i] === "}" && stack[stack.length - 1] === "{" ) {
          stack.pop()
      } else {
          stack.push(s[i])   
      }
  }
  return stack.length === 0;
};

/*

https://leetcode.com/problems/valid-parentheses/

*/
