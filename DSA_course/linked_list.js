//the limiting constraint is the amount of additional space you're allowed to use

var reverseBetween = function(head, left, right) {
    if(!head) return head;
    let dummy = new ListNode(0); //0 is the value of the node
    dummy.next = head;
    let curr = head;
    let prev = dummy;
    let pos = 1;

    //get to the first node that needs to be reversed (left)
    while (pos < left) {
        prev = curr;
        curr = curr.next;
        pos++
    }

    //keep track of the last node that's not being reversed
    let endOfLeftList = prev;
    let endOfReversedList = curr; //will end up being the last node of the reversed list

    while(pos <=right) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        pos++
    }

    //when exit while loop, prev is the head of the reversed list, curr is the head of the right side of the total list

    //end of left list points to head of reversed list
    endOfLeftList.next = prev

    //end of the reversed list needs to point of head to right side of the list
    endOfReversedList.next = curr;

    return dummy.next

}