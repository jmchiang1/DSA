//Reverse a Linked List (EASY)

//Prompt: Given the head of a singly linked list, reverse the list, and return the reversed list.

// Solution 1: Two pointers
// Time: O(N)
// Space: O(N)
var reverseList = function(head) {

  if (!head) return head;    

  let prev = null;            //initialize previous node for recollection purposes
  let current = head;         //intialize our current node at the head (start of the list)
  let next = null;            //intialize our next node at null, don't know what the next value is yet
  
  while (current !== null) { 
      next = current.next;    // next variable = node after current node
      current.next = prev;    //reverse the linked list here: current.next node now points to the previous node (null)
                              //ex: 1 now points to null
      prev = current;         //change prev to current: (null -> 1)
      current = next;         //change current to next: (1 -> 2)
                              //basically move the location of all pointers up by 1
  }
  return prev;                //after while loop, return prev which is now the new head, 
                              //current is now also null so exit the above function
};

// Solution 2: Recursion 
// Time: O(N)
// Space: (O1)
var reverseList = function(head) {
  if (head == null) return head
  
  let prev = null             // prev's purpose is to keep track of the previous nodes that has been traversed
  return reverse(head, prev)
};

function reverse(node, prev) {
  // the recursion ends when node, the original link is at its end
  // it would return prev, which is the reversed linked list
  if (node == null) return prev

  let currNode = node   // currNode is to keep track of the first node in the recursion
  let next = node.next  // next keeps track of the second node to not lose reference since we are detecting the currNode
  currNode.next = prev  // currNode's next link is to prev, which is null in the first recursion
  
  // next is the next node that connects to the original link
  // currNode is now [1, null], after detacting [1] from the original link and reattaching to prev [null]
  // now currNode is prev for it to be reconnected in the next recursion
  return reverse(next, currNode) 
}

/*

https://leetcode.com/problems/reverse-linked-list/

*/
