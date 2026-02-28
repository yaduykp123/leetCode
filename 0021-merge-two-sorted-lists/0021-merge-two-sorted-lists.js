/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let arr = [];

    while (list1) {
        arr.push(list1.val);
        list1 = list1.next;
    }

    while (list2) {
        arr.push(list2.val);
        list2 = list2.next;
    }

    arr.sort((a,b) => a-b);

    let dummy = new ListNode(-1);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
};


console.log(mergeTwoLists([1,2,4], [1,3,4]));
mergeTwoLists([],[])
mergeTwoLists([],[0])