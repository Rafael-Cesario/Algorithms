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

const printValues = (head) => {
	const values = [];
	while (head) {
		values.push(head.value);
		head = head.next;
	}

	console.log(values);
};

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has node.val == val, and return the new head.

const removeVal = (head, value) => {
	if (!head.value) return [];

	const dummy = new Node(-1);
	dummy.next = head;

	let prev = dummy;
	let current = head;

	while (current) {
		if (current.value === value) {
			prev.next = current.next;
		} else {
			prev = current;
		}

		current = current.next;
	}

	printValues(dummy.next);
	return dummy.next || [];
};

console.log(removeVal(createClass([1, 2, 6, 3, 4, 5, 6]), 6)); // [1, 2, 3, 4, 5]
console.log(removeVal(createClass([]), 1)); // []
console.log(removeVal(createClass([7, 7, 7, 7]), 7)); // []
