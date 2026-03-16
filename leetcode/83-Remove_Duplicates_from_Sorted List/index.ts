function deleteDuplicates(head: ListNode | null): ListNode | null {
    let atual = head;
    while (atual !== null && atual.next !== null) {
        if (atual.val === atual.next.val) {
            atual.next = atual.next.next;
        } else {
            atual = atual.next;
        }
    }

    return head;
}