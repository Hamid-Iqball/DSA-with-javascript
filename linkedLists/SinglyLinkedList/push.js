class Node {
  constructor(val) {
    this.head = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      temp = pre;
      temp = temp.next;
    }
    this.tail = pre;
    this.length--;
  }
}

let list = new SinglyLinkedList();
list.push("Hamid");
list.push("Iqbal");
list.pop();
console.log(list);
