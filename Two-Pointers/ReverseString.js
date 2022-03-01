//Reverse String (EASY)

//Prompt: Write a function that reverses a string. The input string is given as an array of characters s.
//You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function(s) {
    
    let left = 0;
    let right = s.length-1;

    while (left < right) {
    
        let temp = s[left];          //store current leftPointer value as temp
        s[left] = s[right];          //switch places here
        s[right] = temp;
    
        left++;  
        right--;
    }
    return s;
};

/*
          L-->              <--R
Input =  ["H", "E", "L", "L", "O"]

Output = ["O", "E", "L", "L", "H"]

         ["O", "L", "L", "E", "H"]

Temp = "H" --> "E"

https://leetcode.com/problems/reverse-string/

*/