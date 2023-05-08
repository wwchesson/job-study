//A linked list is composed of "nodes" which holds a value and a pointer to another node or null.
//SLL have 3 properties: head, tail, length
//Each node has value & next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null; //when constructing a Node class, don't know where it will point to
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    //O(1)
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      //by default the new tail's next value is null - line 8
    }
    this.length++;
    return this; //this refers to the instance of the SLL
  }
  pop() {
    //O(n) - bc have to traverse entire list to get to tail, it's O(n)
    //in DLL, can reassign prev value of new tail without having to traverse entire list
    if (!this.length) return;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    return current;
  }

  shift() {
    //O(1)
    if (!this.length) return;
    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    return removedHead;
  }

  unshift(val) {
    //O(1)
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = head;
      this.head = newNode;
    }
    this.length++; //outside the if/else statement bc will increase length either way
    return this;
  }

  get(index) {
    //O(n)
    if (index < 0 || index >= this.length) return;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    //O(n) because of the get()
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return this;
    }
    return false;
  }

  insert(index, val) {
    //O(n) bc of get method
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;

    prevNode.next = newNode;
    newNode.next = temp;

    //don't forget these 2 lines below
    this.length++;
    return this;
  }

  remove(index) {
    //O(n) bc of get()
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift(); //don't forget return keyword
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let temp = this.get(index + 1);
    let removedNode = this.get(index);

    prevNode.next = temp;
    this.length--;
    return removedNode;
  }
}

function findMostFrequentNode(ll) {
  let hashCount = {};

  let counter = 0;
  let current = ll.head;
  while (counter < ll.length) {
    let key = current.val;
    if (hashCount[key]) {
      hashCount[key]++;
    } else {
      hashCount[key] = 1;
    }
    counter++;
    current = current.next;
  }

  for (const key in hashCount) {
    if (hashCount[key] === Math.max(...Object.values(hashCount))) {
      return key;
    }
  }
}
const sll = new SinglyLinkedList();
sll.push(8);
sll.push(8);
sll.push(10);
sll.push(12);
sll.push(11);
console.log(findMostFrequentNode(sll));
// output: SinglyLinkedList {
//   head: Node { val: 8, next: Node { val: 9, next: null } },
//   tail: Node { val: 9, next: null },
//   length: 2
// }
