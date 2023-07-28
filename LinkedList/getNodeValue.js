class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

// const getNodeValue = (root, index) => {
// 	let currentIndex = 0;
// 	let current = root;

// 	while (current) {
// 		if (currentIndex === index) return current.value;
// 		current = current.next;
// 		currentIndex++;
// 	}

// 	return null;
// };

const getNodeValue = (root, index) => {
	if (!root) return null;
	if (index === 0) return root.value;

	return getNodeValue(root.next, index - 1);
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(getNodeValue(a, 2)); // 'c'
