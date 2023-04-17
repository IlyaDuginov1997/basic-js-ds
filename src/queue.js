const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.length) {
      this.last.next = newNode;
      this.last = newNode;

    } else {
      this.first = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.length) return null;

    const removedItem = this.first;

    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next;
    this.length--;

    return removedItem.value;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

console.log('queue', queue);
console.log('1', queue.dequeue());
console.log('2', queue.dequeue());

module.exports = {
  Queue
};
