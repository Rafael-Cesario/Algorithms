class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

// const linkedListValues = (root) => {
// 	const values = [];

// 	let current = root;

// 	while (current) {
// 		values.push(current.value);
// 		current = current.next;
// 	}

// 	return values;
// };

// time = O(n)
// space = o(n)

const linkedListValues = (root) => {
	const values = [];

	fillValues(root, values);

	return values;
};

const fillValues = (root, values) => {
	if (!root) return;

	values.push(root.value);
	fillValues(root.next, values);
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]
