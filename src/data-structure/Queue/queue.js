const LinkedList = require('../linked-list/DoublyLinkedList');

class Queue {
  constructor(iterable = []) {
    this.items = new LinkedList(iterable);
  }

  /**
   * Add element to the back of the queue.
   * Runtime: O(1)
   * @param {any} item
   * @returns {queue} instance to allow chaining.
   */
  enqueue(item) {
    this.items.addLast(item);

    return this;
  }

  /**
   * Remove element from the front of the queue.
   * Runtime: O(1)
   * @returns {any} removed value.
   */
  dequeue() {
    return this.items.removeFirst();
  }
}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.dequeue(); //↪️ a
queue.enqueue('c');
queue.dequeue(); //↪️ b
queue.dequeue(); //↪️ c
