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