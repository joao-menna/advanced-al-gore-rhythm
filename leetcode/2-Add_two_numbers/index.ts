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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode;
    let a = l1;
    let b = l2;
    let tail = dummy;

    let carry = 0;
    let sum = 0;

    while (!!a||!!b||!!carry) {
        let x = (a === null) ? 0 : a.val
        let y = (b === null) ? 0 : b.val
        sum = x + y + carry;
        if (sum >= 10) {
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        } else {
            carry = 0;
        }

        let newNode = new ListNode;
        newNode.val = sum;
        tail.next = newNode;

        if (a !== null) {
            a = a.next;
        }
        if (b !== null) {
            b = b.next;
        }
        tail = tail.next;
    }
    if (carry !== 0) {
        let newNode = new ListNode;
        newNode.val = carry;
        tail.next = newNode;
    }

    return dummy.next;
};