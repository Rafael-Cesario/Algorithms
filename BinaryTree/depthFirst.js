class Node {
	constructor(value, left, right) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

// Write a function, depthFirstValues, that takes in the root of a binary tree, the function should return an array containing all values of the tree in depth-first order.

// Time = O(n)
// Space = O(n)

// const depthFirstValues = (root) => {
// 	if (!root) return [];

// 	const stack = [root];
// 	const values = [];

// 	while (stack.length > 0) {
// 		const current = stack.pop();
// 		values.push(current.value);

// 		if (current.right) stack.push(current.right);
// 		if (current.left) stack.push(current.left);
// 	}

// 	return values;
// };

const depthFirstValues = (root) => {
	if (!root) return [];

	const leftValues = depthFirstValues(root.left);
	const rightValues = depthFirstValues(root.right);

	return [root.value, ...leftValues, ...rightValues];
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(depthFirstValues(a));
