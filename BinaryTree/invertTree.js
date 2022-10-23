// Given the root of a binary tree, return the inorder traversal of its nodes' values.

class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const invertTree = (root) => {
	if (!root) return;

	const temp = root.left;
	root.left = root.right;
	root.right = temp;

	invertTree(root.left);
	invertTree(root.right);

	return root;
};

const [a, b, c, d, e, f, g] = [new Node(4), new Node(2), new Node(7), new Node(1), new Node(3), new Node(6), new Node(9)];

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(invertTree(a));
