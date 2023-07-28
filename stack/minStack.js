// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

class Stack {
	stack = [];
	min = [];

	push(number) {
		this.stack.push(number);
		this.min.push(Math.min(number, this.min[this.min.length - 1]));
	}

	pop() {
    this.stack.pop();
    this.min.pop();
	}

	top() {
		this.stack[this.stack.length - 1];
	}

	getMin() {
		return this.min[this.min.length - 1];
	}
}

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
