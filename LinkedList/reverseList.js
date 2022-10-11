class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

// const reverseList = (root) => {
// 	let previous = null;
// 	let current = root;

// 	while (current) {
// 		const next = current.next;

// 		current.next = previous;
// 		previous = current;
// 		current = next;
// 	}

// 	return previous;
// };

const reverseList = (root, previous = null) => {
	if (!root) return previous;
	const next = root.next;
	root.next = previous;
	return reverseList(next, root);
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

console.log(reverseList(a)); // f -> e -> d -> c -> b -> a
