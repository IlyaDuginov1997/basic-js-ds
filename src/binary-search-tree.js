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

  find(data, withParent = false) {
    let currentNode = this.rootNode
    let parentNode = null;

    while(true) {
      if (currentNode === undefined || currentNode === null) return null;
      if (currentNode.data === data) {
        if (withParent) {
          return {currentNode, parentNode}
        }
        return currentNode;
      }
      if (data < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }

  remove(data) {
    const {currentNode, parentNode} = this.find(data, true);
    let currentNodePosition = (currentNode.data > parentNode.data) ? 'right' : 'left';

    if (currentNode.left === null && currentNode.right === null) {
      parentNode[currentNodePosition] = null;
      return
    }

    if (!!currentNode.left && currentNode.right === null) {
      parentNode[currentNodePosition] = currentNode.left;
      return
    }

    if (!!currentNode.right && currentNode.left === null) {
      parentNode[currentNodePosition] = currentNode.right;
      return
    }
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
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
// tree.remove(9);

console.log(tree.has(14))
console.log(tree.has(8))
console.log(tree.has(9))
console.log(tree.has(2))
console.log(tree.has(6))
console.log(tree.has(128))
console.log(tree.has(31))
console.log(tree.has(54))
console.log(tree.has(1))

module.exports = {
  BinarySearchTree
};