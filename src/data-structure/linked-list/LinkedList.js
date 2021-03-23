class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length > 0) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length += 1;

    return newNode;
  }

  pop() {
    if (!this.length) {
      return null;
    } else {
      let currentNode = this.head;
      let secondToLastNode = this.head;

      while (currentNode.next) {
        secondToLastNode = currentNode;
        currentNode = currentNode.next;
      }

      secondToLastNode.next = null;

      this.tail = secondToLastNode;
      this.length -= 1;

      if (!this.length) {
        this.head = null;
        this.tail = null;
      }

      return currentNode;
    }
  }
}

const newSLL = new SinglyLinkedList();

newSLL.push('A'); //?
newSLL.push('B'); //?
newSLL.push('C'); //?

newSLL.pop();

console.log(newSLL);
