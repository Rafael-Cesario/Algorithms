// Given the root of a binary tree, return the length of the diameter of the tree.

class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const diameter = (root) => {
	let result = 0;

	const findMax = (root) => {
		if (!root) return -1;

		const left = findMax(root.left);
		const right = findMax(root.right);

		result = Math.max(result, left + right + 2);

		return Math.max(left, right) + 1;
	};

	findMax(root);
	return result;
};

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(diameter(a));
