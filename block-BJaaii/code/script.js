class Stack {
    constructor() {
      this.stack = [];
    }
    push(data) {
      this.stack.push(data);
      return this.stack;
    }
    pop() {
      this.stack.pop();
      return this.stack;
    }
    peak(i = this.length - 1) {
      return this.stack[i];
    }
    reverse() {
      return this.stack.reverse();
    }
    isEmpty() {
      return !(this.stack.length > 0);
    }
    displayStack() {
      return this.stack.join(" ");
    }
    get length() {
      return this.stack.length;
    }
  }
  
  class Queue {
    constructor() {
      this.queue = [];
    }
    enqueue(data) {
      this.queue.push(data);
      return this.queue;
    }
    dequeue() {
      this.queue.splice(0, 1);
      return this.queue;
    }
    peak(i = 0) {
      return this.queue[i];
    }
    reverse() {
      return this.queue.reverse();
    }
    isEmpty() {
      return !(this.queue.length > 0);
    }
    displayqueue() {
      return this.queue.join(" ");
    }
    get length() {
      return this.queue.length;
    }
  }