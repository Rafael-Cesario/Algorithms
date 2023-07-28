// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const mergeLists = (h1, h2) => {
	const head = new Node();
	let tail = head;

	while (h1 && h2) {
		if (h1.value < h2.value) {
			tail.next = h1;
			h1 = h1.next;
		} else {
			tail.next = h2;
			h2 = h2.next;
		}

		tail = tail.next;
	}

	if (h1) tail.next = h1;
	if (h2) tail.next = h2;

	return head.next;
};

const a = new Node(1);
const b = new Node(2);
const c = new Node(4);
a.next = b;
b.next = c;

const d = new Node(1);
const e = new Node(3);
const f = new Node(4);
d.next = e;
e.next = f;

console.log(mergeLists(a, d)); // 1 1 2 3 4 4
