//Invert Binary Tree (EASY)

//Prompt: Given the root of a binary tree, invert the tree, and return its root.

// Solution 1: Recusion
// Time: O(N)
// Space: O(N)
var invertTree = function(root) {
  reverseNodes(root);             //recurse on entire BST
  return root;                    //return new inverted BST
};

function reverseNodes (node){     //recursive helper function
  if (!node) return;              //base case: if no tree exist return nothing
      
  reverseNodes(node.left);        //recurse while traversing left side
  reverseNodes(node.right);       //recurse while traversing left side
          
  let temp = node.left;           //store node.left value in "temp" variable 
  node.left = node.right;         //change node.left to node.right
  node.right = temp;              //change node.right to left
      
  }

/*

    2            2
   / \    -->   / \
  1   3        3   1

https://leetcode.com/problems/invert-binary-tree/

*/
