// Given a singly linked list, find the middle of the linked list. For example, if the given linked list is 1->2->3->4->5 then the output should be 3.

// If there are even nodes, then there would be two middle nodes, we need to print the second middle element. For example, if the given linked list is 1->2->3->4->5->6 then the output should be 4.

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

const findMiddle = (head) => {
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
};

const list = buildList([1, 2, 3, 4, 5, 6]);
const result = findMiddle(list);

printList(list);
console.log({ result });
