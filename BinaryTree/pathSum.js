class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.right = right;
		this.left = left;
	}
}

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

const buildTree = (array, i = 0) => {
	let root = null;

	if (i < array.length) {
		root = new Node(array[i]);
		root.left = buildTree(array, 2 * i + 1);
		root.right = buildTree(array, 2 * i + 2);
	}

	return root;
};

const tree01 = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
const tree02 = buildTree([1, 2, 3]);

const hasPathSum = (root, targetSum) => {
	const depthFirstSearch = (root, count) => {
		if (!root) return false;

		count += root.val;
		if (!root.left && !root.right) return count === targetSum;

		const left = depthFirstSearch(root.left, count);
		const right = depthFirstSearch(root.right, count);

		return left || right;
	};

	return depthFirstSearch(root, 0);
};

console.log({
	01: hasPathSum(tree01, 22),
	02: hasPathSum(tree02, 5),
});
