function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(-1);
    let atual = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            atual.next = list1;
            list1 = list1.next;
        } else {
            atual.next = list2;
            list2 = list2.next;
        }
        atual = atual.next;
    }

    atual.next = list1 !== null ? list1 : list2;

    return dummy.next;