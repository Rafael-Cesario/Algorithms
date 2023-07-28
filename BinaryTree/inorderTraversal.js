class Tree {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// const traversal = (root) => {
// 	const result = [];

// 	const inorder = (root) => {
// 		if (!root) return;

// 		inorder(root.left);
// 		result.push(root.value);
// 		inorder(root.right);
// 	};

// 	inorder(root);
// 	return result;
// };

const traversal = (root) => {
	const result = [];
	const stack = [];
	let current = root;

	while (current || stack.length > 0) {
		while (current) {
			stack.push(current);
			current = current.left;
		}

		current = stack.pop();
		result.push(current.value);
		current = current.right;
	}

	return result;
};

// Tree
const [a, b, c] = [new Tree(1), new Tree(2), new Tree(3)];
a.right = b;
b.left = c;

console.log(traversal(a));
