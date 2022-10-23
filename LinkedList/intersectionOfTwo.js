class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const createClass = (values) => {
	const head = new Node(values[0]);
	let tail = head;
	let index = 1;

	while (index < values.length) {
		tail.next = new Node(values[index]);
		tail = tail.next;
		index++;
	}

	return head;
};

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

const intersection = (headA, headB) => {
	let a = headA;
	let b = headB;

	while (a !== b) {
		a = a ? a.next : headB;
		b = b ? b.next : headA;
		if (a?.value === b?.value) return a.next.value;
	}

	return a;
};

const ex01 = [createClass([4, 1, 8, 4, 5]), createClass([5, 6, 1, 8, 4, 5])];
console.log(intersection(ex01[0], ex01[1]));
