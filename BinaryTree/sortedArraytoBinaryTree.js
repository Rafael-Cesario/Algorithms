// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const sortedArrayToBST = (nums) => {
	const buildNode = (l, r) => {
		if (l > r) return null;

		const mid = Math.ceil((l + r) / 2);
		const node = new Node(nums[mid]);

		node.left = buildNode(l, mid - 1);
		node.right = buildNode(mid + 1, r);

		return node;
	};

	return buildNode(0, nums.length - 1);
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
