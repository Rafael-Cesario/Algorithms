// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const createList = (array) => {
	const head = new Node(array[0]);
	let tail = head;

	for (let i = 1; i < array.length; i++) {
		tail.next = new Node(array[i]);
		tail = tail.next;
	}

	return head;
};

const list1 = createList([1, 2, 3, 4, 5]);
const list2 = createList([1]);
const list3 = createList([1, 2]);

const removeNthNodeFromEndOfList = (head, k) => {
	const dummy = new Node(null);

	let left = dummy;
	let right = head;
	let count = 0;

	left.next = head;

	while (count < k) {
		right = right.next;
		count++;
	}

	while (right) {
		left = left.next;
		right = right.next;
	}

	left.next = left.next.next;

	return dummy.next;
};

// const printValues = (head) => {
// 	while (head) {
// 		console.log({ head });
// 		head = head.next;
// 	}
// };

const result = removeNthNodeFromEndOfList(list1, 2);
const result2 = removeNthNodeFromEndOfList(list2, 1);
const result3 = removeNthNodeFromEndOfList(list3, 2);
console.log({ result, result2, result3 });
