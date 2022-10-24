// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const isSubtree = (root, subRoot) => {
	if (!subRoot) return true;
	if (!root) return false;

	const isSameTree = sameTree(root, subRoot);
	if (isSameTree) return true;

	const left = isSubtree(root.left, subRoot);
	const right = isSubtree(root.right, subRoot);

	return left || right;
};

const sameTree = (r, s) => {
	if (!s && !r) return true;
	if (!s || !r) return false;
	if (s.val !== r.val) return false;

	const left = sameTree(r.left, s.left);
	const right = sameTree(r.right, s.right);
	return left && right;
};

const a = new Node(3);
const b = new Node(4);
const c = new Node(5);
const d = new Node(1);
const e = new Node(2);
a.left = b;
a.right = c;
b.left = d;
b.right = e;

const f = new Node(4);
const g = new Node(1);
const h = new Node(2);
f.left = g;
f.right = h;

console.log(isSubtree(a, f));
