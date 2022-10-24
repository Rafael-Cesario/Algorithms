// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const sameTree = (root01, root02) => {
	if (!root01 && !root02) return true;
	if (!root01 || !root02) return false;
	if (root01.val !== root02.val) return false;

	const left = sameTree(root01.left, root02.left);
	const right = sameTree(root01.right, root02.right);

	return left && right;
};

// ex01
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
a.left = b;
a.right = c;

const d = new Node(1);
const e = new Node(2);
const f = new Node(3);
d.left = e;
d.right = f;

console.log(sameTree(a, d));

// ex02
// const a = new Node(1);
// const b = new Node(2);
// a.left = b;

// const c = new Node(1);
// const d = new Node(2);
// c.right = d;

// console.log(sameTree(a, c));
