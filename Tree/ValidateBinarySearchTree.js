//Validate Binary Search Tree (MEDIUM)

//Prompt: Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST's left nodes are less than root node, and right node is more than root node. 

// Solution 1: Recusion
// Time: O(N)
// Space: O(N) - Creating new stack of N length
var isValidBST = function(node) {
  function helper(node, min, max){
      if (!node) return true;       //base case: if tree is empty return true since that's valid
  
      if (node.val <= min || node.val >= max) return false;
  
      let left = helper(node.left, min, node.val) 
      //invoke rescursive function on left side, with min at min val, and max at the node.val
      //EX: left side of BST [-Infinity -> 2]
  
      let right = helper(node.right, node.val, max)
      //EX: right side of BST [2 -> +Infinity]
  
      return left && right;
  }
  return helper(node, -Infinity, Infinity)
}

/*

  VALID
    1         
   / \    
  2   3    
  
NOT VALID
    1         
   / \    
  3   2  

https://leetcode.com/problems/validate-binary-search-tree/

*/
