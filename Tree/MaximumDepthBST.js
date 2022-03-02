//Maximum Depth of Binary Tree (EASY)

//Prompt: Given the root of a binary tree, return its maximum depth.

// Solution 1: Recusion using DFS
// Time: O(N)
// Space: O(N) - Creating new stack of N length
var maxDepth = function(root) {
  if (root === null) return 0;        //base case: if the BST doesn't exist, return 0
  
  let left = maxDepth(root.left);     //traverse left side of BST
  let right = maxDepth(root.right);   //traverse right side of BST
  
  return Math.max(left, right) + 1;   //return the maximum number between the 2 depths + 1 since it doesn't count the root node
};

/*

    3         
   / \    
  9   20  
      / \
    15   7

Max Depth = 3

https://leetcode.com/problems/maximum-depth-of-binary-tree/

*/
