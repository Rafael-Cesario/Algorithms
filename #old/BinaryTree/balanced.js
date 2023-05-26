class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const isBalanced = (root) => {
	let result = true;

	const balanced = (root) => {
		if (!root) return 0;

		const left = balanced(root.left);
		const right = balanced(root.right);

		const x = Math.abs(left - right);
		if (x > 1) result = false;

		return Math.max(left, right) + 1;
	};

	balanced(root);
	return result;
};

const a = new Node(1);
const b = new Node(2);
const c = new Node(2);
const d = new Node(3);
const e = new Node(3);
const f = new Node(4);
const g = new Node(4);

a.left = b;
b.left = c;
b.left = d;
b.right = e;
d.left = f;
d.right = g;

console.log(isBalanced(a));
