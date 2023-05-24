// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const maximumDepth = (root) => {
	let max = 0;

	const findMax = (root) => {
		if (!root) return 0;

		const left = findMax(root.left) + 1;
		const right = findMax(root.right) + 1;

		return Math.max(left, right);
	};

	max = findMax(root);
	return max;
};

const [a, b, c, d, e] = [new Node(3), new Node(9), new Node(20), new Node(15), new Node(7)];

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(maximumDepth(a));
