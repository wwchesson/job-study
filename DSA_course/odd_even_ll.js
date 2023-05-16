//for LL, what are the important nodes?
//add the end of my code, what are the nodes that I need access to in order to tie everything together

var oddEvenList = function(head) {
    if(head == null) return null;

    let currentOdd = head, currentEven = head.next; evenHead = head.next

    //the currentEven on the last iteration would point ot null
    //if either one of these is null, then stop
    while(currentEven != null && currentEven.next != null) {
        //make current odd point ot the next odd
        currentOdd.next = currentOdd.next.next  //could be currentOdd.next = currentEven.next

        //move to the next odd
        currentOdd = currentOdd.next

        //make currentEven point to the next even
        currentEven.next = currentEven.next.next

        //move to next even
        currentEven = currentEven.next
    }

    currentOdd.next = evenHead
    return head
}