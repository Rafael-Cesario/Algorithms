// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.

class StackQueue {
	queue = [];

	myStack() {
		return this.queue;
	}

	push(value) {
		this.queue.push(value);
		return this.queue;
	}

	top() {
		return this.queue[this.queue.length - 1];
	}

	pop() {
		let index = 0;
		while (index < this.queue.length - 1) {
			const first = this.queue.shift();
			this.queue.push(first);
			index++;
		}

		return this.queue.shift();
	}

	empty() {
		return this.queue.length === 0;
	}
}

const stack = new StackQueue();

console.log(stack.myStack());
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.top());
console.log(stack.pop());
console.log(stack.empty());
