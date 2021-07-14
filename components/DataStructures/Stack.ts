class Stack {
  stack: Array<number | string>;
  constructor() {
    this.stack = [];
  }

  push(data: number | string) {
    this.stack.push(data);
  }
  pop() {
    if (this.stack.length === 0) return "The Stack is empty";
    this.stack.pop();
  }
}

export { Stack };
