// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const buildTree = (array, i) => {
	let root = null;
	if (i < array.length) {
		root = new Node(array[i]);
		root.left = buildTree(array, 2 * i + 1);
		root.right = buildTree(array, 2 * i + 2);
	}
	return root;
};

const mergeTrees = (root01, root02) => {
	if (!root01 && !root02) return null;
	if (!root01) root01 = new Node(0);
	if (!root02) root02 = new Node(0);

	const root = new Node(root01.val + root02.val);

	root.left = mergeTrees(root01.left, root02.left);
	root.right = mergeTrees(root01.right, root02.right);

	return root;
};

const a = buildTree([1, 3, 2, 5], 0);
const b = buildTree([2, 1, 3, null, 4, null, 7], 0);

console.log(mergeTrees(a, b));
