class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const buildTree = (array, i = 0) => {
	let root = null;

	if (i < array.length) {
		root = new Node(array[i]);
		root.left = buildTree(array, 2 * i + 1);
		root.right = buildTree(array, 2 * i + 2);
	}

	return root;
};

const tree01 = buildTree([1, 2, 3, 4]);
const tree02 = buildTree([1, 2, 3, null, 4]);

// Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

// Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

const tree2str = (root) => {
	if (!root) return;

	let right = tree2str(root.right);
	right = right ? `(${right})` : '';

	let left = tree2str(root.left);
	left = left || right ? `(${left || ''})` : '';

	const string = `${root.val}${left}${right}`;

	return string;
};

console.log(tree2str(tree01));
console.log(tree2str(tree02));
