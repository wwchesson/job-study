//Data structure that consists of node in a parent-child relationship (non-linear)
//top node is call ROOT; a child with no children called a LEAF
//Types of trees: trees, binary trees, BST

//DOM is tree; computer file systems; folders;
//AI decision-making is based on trees like chatbots. If yes, do this; this no, do that.

//BINARY TREES: unordered, allows duplicate values

//BINARY SEARCH TREES: every parent node has at most 2 children
//Every node to the left of a parent node is always < parent; and the flip to the right;
//Used in decision algorithms & database indices
//Does not allow duplicate values
//Big O: inserting & searching both run at O(log n)

//Nodes have 3 properties: value, left, right
//BST only has property of root

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //always insert at a leaf, not in the middle of the tree
  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right
      }
    }
  }

  //returning value
  find(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        //else the value === current.value
        found = true;
      }
    }
    //if while loop kicks out bc !current, then have found nothing and return udnefined
    if (!found) return undefined;
    return current;
  }

  //return boolean
  contains(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        //else the value === current.value
        return true;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree()
tree.insert(8)
tree.insert(2)
tree.insert(10)
tree.insert(20)
console.log(tree)