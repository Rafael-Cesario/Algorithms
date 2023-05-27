// https://leetcode.com/problems/min-stack/description/

class MinStack {
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(val) {
		this.stack.push(val);
		const isLowerThenMin = this.minStack[this.minStack.length - 1] >= val;
		if (isLowerThenMin || !this.minStack.length) this.minStack.push(val);
	}

	getMin() {
		return this.minStack[this.minStack.length - 1];
	}

	pop() {
		const lastElement = this.stack.pop();
		if (lastElement === this.minStack[this.minStack.length - 1]) this.minStack.pop();
	}

	top() {
		return this.stack[this.stack.length - 1];
	}
}
