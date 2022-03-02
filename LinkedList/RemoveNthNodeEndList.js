//Remove Nth Node From End of List (MEDIUM)

//Prompt: Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Solution : Create 2 pointers of "N" length. Traverse until one pointer at null, and delete that node
// Time: O(N)
// Space: O(1)
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode();             //create new list node behind head
  dummy.next = head;
  let front = dummy;                      //front and back pointers both start at dummy
  let back = dummy;
  
  for (let i = 0; i< n; i++){             //move front pointer "n" spaces to make the gap
      front = front.next
  }
  while(front.next !== null){             //move front and back until front is at null
      front = front.next;
      back = back.next;
  }
  back.next = back.next.next;             //delete node
  return dummy.next;                      //return new list
};

/*

https://leetcode.com/problems/remove-nth-node-from-end-of-list/

*/
