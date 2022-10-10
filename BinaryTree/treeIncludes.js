class Node {
	constructor(value, left, right) {
		this.value = value;
		this.right = right;
		this.left = left;
	}
}

// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.

const treeIncludes = (root, target) => {
	if (!root || !target) return false;

	const queue = [root];

	while (queue.length > 0) {
		const current = queue.shift();

		if (current.value === target) return true;

		current.left && queue.push(current.left);
		current.right && queue.push(current.right);
	}

	return false;
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

console.log(treeIncludes(a, 'f')); // -> true
console.log(treeIncludes(a, 'h')); // -> false
console.log(treeIncludes(a, '')); // -> false
