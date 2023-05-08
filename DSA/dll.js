class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return;

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.length) return;
    let removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let prevHead = this.head;
      prevHead.prev = newNode;
      this.head = newNode;
      this.head.next = prevHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;

    let count;
    let current;

    if (index <= this.length / 2) {
      current = this.head;
      count = 0;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  //(re)assigning the value of a particular node
  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return;
    if (this.length === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let afterNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let nodeToRemove = this.get(index);
    let prevNode = this.get(index - 1);
    let afterNode = this.get(index + 1);
    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;

    this.length--;
    return nodeToRemove;
  }
}

const dll = new DoublyLinkedList();
dll.push(2);
dll.push(3);
dll.push(4);
console.log("before the removal:", dll);

console.log("removed:", dll.remove(1), "new dll:", dll);
