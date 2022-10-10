class Node {
	constructor(value, left, right) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

// Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

// Time = O(n)
// Space = O(n)

const breadthFirstValues = (root) => {
	if (!root) return [];

	const queue = [root];
	const values = [];

	while (queue.length > 0) {
		const current = queue.shift();
		values.push(current.value);

		if (current.left) queue.push(current.left);
		if (current.right) queue.push(current.right);
	}

	return values;
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

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(breadthFirstValues(a));
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
