/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode;
    dummy.next = head;

    let fastPointer = dummy.next;
    let slowPointer = dummy;

    for (let i = n; i >= 1; i--) {
        fastPointer = fastPointer.next;
    }

    while (fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    slowPointer.next = slowPointer.next.next;

    return dummy.next;
};