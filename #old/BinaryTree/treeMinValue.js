class Node {
	constructor(value, left, right) {
		this.value = value;
		this.right = right;
		this.left = left;
	}
}

// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

const treeMinValue = (root) => {
	if (!root) return Infinity;

	const leftValue = treeMinValue(root.left);
	const rightValue = treeMinValue(root.right);

	const min = Math.min(root.value, leftValue, rightValue);

	return min;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeMinValue(a)); // -> -2
