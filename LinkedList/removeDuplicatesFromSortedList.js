class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const createClass = (values) => {
	const head = new Node(values[0]);
	let tail = head;
	let i = 1;

	while (i < values.length) {
		tail.next = new Node(values[i]);
		tail = tail.next;
		i++;
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

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

const removeDuplicates = (head) => {
	let current = head;

	while (current) {
		while (current.next && current.next.value === current.value) {
			current.next = current.next.next;
		}
		current = current.next;
	}

	printValues(head);
	return head;
};

const ex01 = createClass([1, 1, 2]);
console.log(removeDuplicates(ex01));
// => [1, 2]

const ex02 = createClass([1, 1, 2, 3, 3]);
console.log(removeDuplicates(ex02));
// => [1, 2, 3]
