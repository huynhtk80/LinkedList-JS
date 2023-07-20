export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insertAtIndex(index, value) {
    if (index < 0) return null;
    if (index === 0) return this.insertAtHead(value);

    let previousNode = this.getByIndex(index - 1);
    if (previousNode == null) return null;

    previousNode.next = new LinkedListNode(value, previousNode.next);
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index < 0) return null;
    if (index === 0) return this.removeHead();
    let previousNode = this.getByIndex(index - 1);
    if (previousNode == null) return null;
    previousNode.next = previousNode.next.next;
    this.length--;
  }
  print() {
    let output = "";
    let currentNode = this.head;
    while (currentNode) {
      output = output + currentNode.value + " -> ";
      currentNode = currentNode.next;
    }
    console.log(output + "null");
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};
