//Merge Two Sorted List (EASY)

// Prompt: You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. 
// The list should be made by splicing together the nodes of the first two lists.

// Solution 1: create dummy list and compare each number in each list, add smaller number until both list become one.
// Time: O(N)
// Space: O(N)
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1);       //create new linked list so we can merge the two into here
  let head = dummy;                   
  
  while (l1 !== null && l2 !== null){ //while both linked lists have values...
      if (l1.val < l2.val){           //if the node value in l1 is smaller than value in l2...
          dummy.next = l1             //point dummy.next to l1
          l1 = l1.next                //move to next l1 node for comparison
      } else {
          dummy.next = l2             //else, point dummy.next to l2
          l2 = l2.next                
      }
      dummy = dummy.next              //move to next node so we can keep using ".next" property for comparison
  }
                                      //now we have traversed 1 or 2 of linked list
  if (l1 !== null){                   //if l1 is the list that has not been traversed aka it's the list with the larger numbers
      dummy.next = l1;                //append the entire l1 list to the end of the dummy list
  } else {
      dummy.next = l2;                //else, append entire l2 list to end of dummy list
  }
  return head.next                    //finally, return linked list starting from 2nd number, since the 1st number is -1
}; 

class ListNode {                          //function to create a linked list. Use this on line 2
  constructor(val = null, next = null){
      this.val = val;
      this.next = next;
  }
}

/*

https://leetcode.com/problems/merge-two-sorted-lists/

*/
