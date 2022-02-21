//Remove Duplicates from Sorted List

//Prompt: Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
//Return the linked list sorted as well.

var deleteDuplicates = function(head) {
    
    let current = head;
    let prev = null;
    
    while (current !== null && current.next !== null){
        if (current.val === current.next.val){
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

/*

Input: head = [ 1         1             2           ]
               curr   curr.next  current.next.next

https://leetcode.com/problems/remove-duplicates-from-sorted-list/

*/