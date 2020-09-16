const LinkedList = require('../linked-list/DoublyLinkedList');

/**
 * Data structure that adds and remove elements in a first-in, first-out (FIFO) fashion
 */
class Stack {
  constructor() {
    this.items = new LinkedList();
  }

  /**
   * Add element into the stack. Similar to Array.push
   * Runtime: O(1)
   * @param {any} item
   * @returns {stack} instance to allow chaining.
   */
  add(item) {
    this.items.addLast(item);

    return this;
  }

  /**
   * Remove element from the stack.
   * Similar to Array.pop
   * Runtime: O(1)
   * @returns {any} removed value.
   */
  remove() {
    return this.items.removeTail();
  }
}

const stack = new Stack();

stack.add('a');
stack.add('b');
stack.remove(); //↪️ b
stack.add('c');
stack.remove(); //↪️ c
stack.remove(); //↪️ a
