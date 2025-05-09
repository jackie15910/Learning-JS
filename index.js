class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length-1]){
            this.minStack.push(val);
        }
    }

    pop() {
        if(this.stack.pop() === this.minStack[this.minStack.length -1]) {
            this.minStack.pop();
        }

    }

    top() {
        return this.stack[this.stack.length-1];
    }

    getMin() {
        return Math.min(...this.stack);
    }
}

let minStack = new MinStack();

// These are just normal method calls — they test your implementation:
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // should return 0
minStack.pop();
minStack.top();    // should return 2
minStack.getMin(); // should return 1