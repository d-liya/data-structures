class Queue {
  queue: Array<number | string>;
  constructor() {
    this.queue = [];
  }

  enqueue(data: number | string) {
    this.queue.unshift(data);
  }

  dequeue() {
    if (this.queue.length === 0) return "The Queue is Empty.";
    this.queue.pop();
  }
}
export { Queue };
