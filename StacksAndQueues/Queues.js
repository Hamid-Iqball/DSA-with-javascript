/*
 Add to the end , remove from the begining FIFO (First in First Out)

 BIG 0 of Queues
 insertion  : 0(1)
 Removal   : 0(1)
 Searching  : 0(N)
 Access     : 0(N)
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
