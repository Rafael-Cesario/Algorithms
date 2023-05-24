// Given a linked list, check if the linked list has a loop or not. The below diagram shows a linked list with a loop.

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const printList = (head) => {
	while (head) {
		console.log({ list: head.value });
		head = head.next;
	}
};

const hasLoop = (head) => {
	const map = {};

	while (head) {
		if (head.value in map) return true;

		map[head.value] = head;
		head = head.next;
	}

	return false;
};

let a, b, c, d;
a = new Node(1);
b = new Node(2);
c = new Node(3);
d = new Node(4);

a.next = b;
b.next = c;
c.next = d;
d.next = a;

const result = hasLoop(a);
console.log({ result });
