//FIFO - sequential to order that it's requested
//Used in background tasks on browser
//File uploading
//Adding called "enqueue"; deleting called "dequeue" -- have to run in O(1)
//If not in constant time, not a queue
//Enqueue is similar to push(); deleting similar to pop()
//Node has val & next
//Queue has first, last, size

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; //the current last value will point to the newNode that's being added; it's not yet been reassigned
      this.last = newNode;
    }

    this.size++;
    return this;
  }

  dequeue() {
    if(!this.first) return;
    let temp = this.first //return the value that dequeued

    if(this.first === 1) {
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
