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
}

const newSLL = new SinglyLinkedList();

newSLL.push('A'); //?
newSLL.push('B'); //?
newSLL.push('C'); //?

console.log(newSLL);
