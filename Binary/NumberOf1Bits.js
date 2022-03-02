//Number of 1 Bits (EASY)

//Prompt: Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Solution 1: Increment counter
// Time: O(N)
// Space: O(N) - Creating new stack of N length
let hammingWeight = function (n) {
  let count = 0;

  let arr = n.toString(2);  //convert to binary number

  for (let num of arr) {
    if (num === "1") {  //count the number of "1" in the binary number
      count++;
    }
  }
  return count;
};

/*

Input: n = 00000000000000000000000000001011
Arr = 1011
Output: 3

https://leetcode.com/problems/number-of-1-bits/submissions/

*/
