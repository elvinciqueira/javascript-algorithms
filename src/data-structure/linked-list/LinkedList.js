class Node {
  constructor(data, pointer = null) {
    this.data = data;
    this.pointer = pointer;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);

    this.size++;
  }

  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.pointer) {
        current = current.pointer;
      }

      current.pointer = node;
    }

    this.size++;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) return;

    if (index === 0) {
      this.insertFirst(data);

      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;

      count++;

      current = current.pointer;
    }

    node.pointer = current;
    previous.pointer = node;

    this.size++;
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }

      count++;

      current = current.pointer;
    }

    return null;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) return;

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.pointer;
    } else {
      while (count < index) {
        count++;

        previous = current;
        current = current.pointer;
      }

      previous.pointer = current.pointer;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);

      current = current.pointer;
    }
  }
}

const LL = new LinkedList();

LL.insertFirst(100);
LL.insertFirst(200);
LL.insertFirst(300);
LL.insertLast(400);
LL.insertAt(500, 2);

LL.removeAt(2);

LL.clearList();

LL.printListData();
