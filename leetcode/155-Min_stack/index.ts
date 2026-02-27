class MinStack {
  private stack: [number, number][];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    const min = this.stack.length === 0 ? val : Math.min(val, this.getMin());
    this.stack.push([val, min]);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1][0];
  }

  getMin(): number {
    return this.stack[this.stack.length - 1][1];
  }
}
