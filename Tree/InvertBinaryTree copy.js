//Same Tree (EASY)

//Prompt: Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Solution 1: Recusion using DFS
// Time: O(N)
// Space: O(1)
var isSameTree = function(s, t) {      //root of 2 binary trees

  if (!s && !t) return true;           //if both nodes are empty, return true
  if (!s || !t ) return false;         //if one tree exist, but the other doesn't, return false
  if (s.val !== t.val) return false    //if node values aren't the same, return false

  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);    //recurse both sides of both trees
}
/*

    1            1
   / \    -->   / \
  2   3        2   3

https://leetcode.com/problems/same-tree/

*/
