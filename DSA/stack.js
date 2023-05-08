//Removal & insertion: run in O(1) bc always inserting and removing from top
//Use for: function invocation, React routing, undo & redo
//Properties of a stack: last, first, size
//This.first is the node at the top of the stack
//Has a pointer that points to the next node
//Stack node properties: this.value, this.next

//Push: create new node
//edge case: if(!this.first), assign node to be both first and last

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if(!this.first) {
        this.first = newNode;
        this.last = newNode;
    } else {
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;

    }
    this.size++
    return this;
  }

  pop() {
    if(!this.first) return null;  //could be !this.last or this.size === 0
    let temp = this.first;

    if(this.size === 1) {
      this.last = null;
      //don't need to set this.first = null; because when hit line 49 and size === 1, this.first.next is null. Therefore this.first = null. And size will be decremented to 0 with line 50;
    }
      this.first = this.first.next;
      this.size--
      return temp.value;



  }
}
