class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

// const linkedListFind = (root, target) => {
// 	let current = root;

// 	while (current) {
// 		if (current.value === target) return true;
// 		current = current.next;
// 	}

// 	return false;
// };

const linkedListFind = (root, target) => {
	if (!root) return false;
	if (root.value === target) return true;
	return linkedListFind(root.next, target);
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, 'c')); // true
