class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }
  enqueue(value) {
    if ((this.rear + 1) % this.size == this.front) {
      console.log("Queue is full");
      return;
    }
    if (this.front == -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
  }
  dequeue() {
    if (this.front == -1) {
      console.log("Queue is empty");
      return;
    }
    const removed = this.queue[this.front];
    if (this.front == this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return removed;
  }
  display() {
    if (this.front == -1) {
      console.log("Queue is empty");
      return;
    }
    let i = this.front;
    const result = [];
    while (true) {
      result.push(this.queue[i]);
      if (this.rear == i) {
        break;
      }
      i = (i + 1) % this.size;
    }
    console.log(result);
  }
}

const cQueue = new CircularQueue(3);
cQueue.enqueue(10);
cQueue.enqueue(30);
cQueue.enqueue(50);
cQueue.dequeue();
cQueue.enqueue(990);
cQueue.dequeue();
cQueue.enqueue(1190);
cQueue.display();
