//Linked List Cycle (EASY)

// Prompt: You are given the heads of two sorted linked lists list1 and list2.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Solution 1: Fast and Slow pointer. If list is a loop, then fast pointer will equal slow pointer, aka Floyd's Cycle Detection Algorithm. 
// Time: O(N)
// Space: O(1)
var hasCycle = function(head) {
    
    let fastPointer = head;
    let slowPointer = head;
    
    while (fastPointer !== null && fastPointer.next !== null){  
    //while fastPointer is not null and the next value is also not null...
    //if fast.next === null, then we know there is no loop

        fastPointer = fastPointer.next.next //move fastPointer twice
        slowPointer = slowPointer.next      //move slowPointer once
        
        if (fastPointer === slowPointer) return true;
        }
    return false;
};

// Solution 2: Push nodes into set and check if next node is present inside
// Time: O(N)
// Space: O(N)
var hasCycle = function(head) {
    
    let newSet = new Set();
    let current = head;
    
    while(current !== null) {  
        if(newSet.has(current)){    //if the current node is already in the hash table, we have a loop!
            return true;
        } else {
            newSet.add(current);    //if node is not in the hash table, add it
        }
        current = current.next;     // then move on to next node
    }
    return false;
};

// Solution 3: Push nodes into object and check if node value is present inside. Similar to Set method.
// Time: O(N)
// Space: O(N)
var hasCycle = function(head) {
    let hash = {};
    let curr = head;
    
    while (curr){
        if (hash[curr.val] !== undefined && curr === hash[curr.val] ){    //if current node exist in hash and it equals to a value inside, return true
            return true;
        } else {
            hash[curr.val] = curr    //if current node doesnt equal a node in hash, 
        }
        curr = curr.next
    }
    return false;
};

/*

https://leetcode.com/problems/linked-list-cycle/

*/
