const Node = require('./node');

/**
 * Doubly linked list that keeps track of
 * the last and first element
 */

class LinkedList {
  constructor(iterable = []) {
    this.first = null; // head/root element
    this.last = null; // last element of the list
    this.size = 0; // total number of elements in the list

    Array.from(iterable, i => this.addLast(i));
  }

  /**
   * Search by value. It finds first occurrence of
   * the element matching the value.
   * Runtime: O(n)
   * @example: assuming a linked list with: a -> b -> c
   * linkedList.indexOf('b') // ↪️ 1
   * linkedList.indexOf('z') // ↪️ undefined
   * @param {any} value
   * @returns {number} return index or undefined
   */
  indexOf(value) {
    return this.find((current, position) => {
      if (current.value === value) {
        return position;
      }

      return undefined;
    });
  }

  /**
  * Iterate through the list until callback returns a truthy value
  * @example see #get and #indexOf
  * @param {Function} callback evaluates current node and index.
  * If any value other than undefined it's returned it will stop the
  search.
  * @returns {any} callbacks's return value or undefined
  */
  find(callback) {
    for (
      let current = this.first, position = 0;
      current;
      position += 1, current = current.next
    ) {
      const result = callback(current, position);

      if (result !== undefined) {
        return result;
      }
    }

    return undefined; // not found
  }

  /**
   * Search by index
   * Runtime: O(n)
   * @example: assuming a linked list with: a -> b -> c
   * linkedList.get(1) // ↪️ 'b'
   * linkedList.get(40) // ↪️ undefined
   * @param {Number} index position of the element
   * @returns {Node} element at the specified position in this list.
   */
  get(index = 0) {
    return this.find((current, position) => {
      if (position === index) {
        return current;
      }

      return undefined;
    });
  }

  /**
   * Adds element to the begining of the list. Similar to Array.unshift
   * Runtime: O(1)
   * @param {any} value
   */
  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.first;

    if (this.first) {
      this.first.previous = newNode;
    } else {
      this.last = newNode;
    }

    this.first = newNode; // update head
    this.size += 1;

    return newNode;
  }

  /**
   * Adds element to the end of the list (tail). Similar to Array.push
   * Using the element last reference instead of navigating through the
  list,
  * we can reduced from linear to a constant runtime.
  * Runtime: O(1)
  * @param {any} value node's value
  * @returns {Node} newly created node
  */
  addLast(value) {
    const newNode = new Node(value);

    if (this.first) {
      newNode.previous = this.last;
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return newNode;
  }

  /**
   * Insert new element at the given position (index)
   *
   * @param {any} value new node's value
   * @param {Number} position position to insert element
   * @returns {Node} new node or 'undefined' if the index is out of bound.
   */
  add(value, position = 0) {
    if (position === 0) {
      return this.addFirst(value);
    }

    if (position === this.size) {
      return this.addLast(value);
    }

    //Adding element in the middle
    const current = this.get(position);

    if (current) {
      const newNode = new Node(value);
      newNode.previous = current.previous;
      newNode.next = current;

      current.previous.next = newNode;
      current.previous = newNode;

      this.size += 1;

      return newNode;
    }

    return undefined;
  }

  /**
   * Removes element from the start of the list (head/root).
   * Similar to Array.shift
   * Runtime: O(1)
   * @returns {any} the first element's value which was removed.
   */

  removeFirst() {
    const head = this.first;

    if (head) {
      this.first = head.next;

      if (this.first) {
        this.first.previous = null;
      } else {
        this.last = null;
      }

      this.size -= 1;
    }

    return head && head.value;
  }

  /**
   * Removes element to the end of the list. Similar to Array.pop
   * Using the `last.previous` we can reduce the runtime from O(n) to O(1)
   * Runtime: O(1)
   * @returns {value} the last element's value which was removed
   */
  removeTail() {
    const tail = this.last;

    if (tail) {
      this.last = tail.previous;

      if (this.last) {
        this.last.next = null;
      } else {
        this.first = null;
      }

      this.size -= 1;
    }

    return tail && tail.value;
  }

  /**
   * Removes the element at the specified position in this list.
   * Runtime: O(n)
   * @param {any} position
   * @returns {any} the element's value at the specified position that was
  removed.
  */
  removeByPosition(position = 0) {
    const current = this.get(position);

    if (position === 0) {
      this.removeFirst();
    } else if (position === this.size - 1) {
      this.removeLast();
    } else if (current) {
      current.previous.next = current.next;
      current.next.previous = current.previous;

      this.size -= 1;
    }

    return current && current.value;
  }
}

// Aliases
LinkedList.prototype.push = LinkedList.prototype.addLast;
LinkedList.prototype.pop = LinkedList.prototype.removeLast;
LinkedList.prototype.unshift = LinkedList.prototype.addFirst;
LinkedList.prototype.shift = LinkedList.prototype.removeFirst;
LinkedList.prototype.search = LinkedList.prototype.contains;

module.exports = LinkedList;
