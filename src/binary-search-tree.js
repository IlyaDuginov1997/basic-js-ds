const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return
    }

    let currentNode = this.rootNode;

    while(currentNode) {
      if (newNode.data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
    }

  }

  has(data) {
    let currentNode = this.rootNode

    while(true) {
      if (currentNode === undefined || currentNode === null) return false;
      if (currentNode.data === data) return true;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  find(data) {
    let currentNode = this.rootNode

    while(true) {
      if (currentNode === undefined || currentNode === null) return null;
      if (currentNode.data === data) return currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  remove(data) {

  }

  min() {
    let currentNode = this.rootNode

    while(true) {
      if (currentNode === undefined || currentNode === null) return null;
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        return currentNode.data;
      }
    }
  }

  max() {
    let currentNode = this.rootNode

    while(true) {
      if (currentNode === undefined || currentNode === null) return null;
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        return currentNode.data;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.add(8);
tree.add(3);
tree.add(4);
tree.add(9);
tree.add(11);
tree.add(24);
tree.add(1);
tree.add(2);
tree.add(104);

module.exports = {
  BinarySearchTree
};