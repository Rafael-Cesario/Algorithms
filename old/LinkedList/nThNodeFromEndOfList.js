// Given a Linked List and a number N, write a function that returns the value at the Nth node from the end of the Linked List.

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const buildList = (array) => {
	const head = new Node(array[0]);
	let tail = head;

	for (let i = 1; i < array.length; i++) {
		tail.next = new Node(array[i]);
		tail = tail.next;
	}

	return head;
};

const printList = (head) => {
	while (head) {
		console.log({ list: head });
		head = head.next;
	}
};

const nThNodeFromEnd = (head, target) => {
	let left = head;
	let right = head;
	let count = 0;

	while (right) {
		while (count < target) {
			right = right.next;
			count++;
		}

		left = left.next;
		right = right.next;
	}

	return left;
};

const list = buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const target = 3;
const result = nThNodeFromEnd(list, target);

printList(list);
console.log({ target, result });
