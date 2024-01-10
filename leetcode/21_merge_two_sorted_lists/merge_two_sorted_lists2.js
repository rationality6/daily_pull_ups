// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function listnodefyLoop(array, ramainLength, arrayIndex) {
  if (ramainLength == 0) return;
  return new ListNode(
    array[arrayIndex],
    listnodefyLoop(array, ramainLength - 1, arrayIndex + 1)
  );
}

function listnodefy(array) {
  if (array.length == 0) return;
  let arrayRemainLength = array.length;
  let arrayIndex = 0;

  return listnodefyLoop(array, arrayRemainLength, arrayIndex);
}

var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  if (list1.val < list2.val) {
    return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
  }
  return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
};

const list1 = [1, 2, 4];
const listNode1 = listnodefy(list1);
console.log(listNode1);

const list2 = [1, 3, 4];
const listNode2 = listnodefy(list2);
console.log(listNode2);

const result = mergeTwoLists(listNode1, listNode2)

// function resultRecur(result){
//   console.log(result.val)

//   if(result.next == null) return
//   resultRecur(result.next)
// }

// resultRecur(result)