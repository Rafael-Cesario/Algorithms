class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

// const sumList = (root) => {
// 	let total = 0;

// 	let current = root;

// 	while (current) {
// 		total += current.value;
// 		current = current.next;
// 	}

// 	return total;
// };

// time = o(n)
// space = o(n)

const sumList = (root) => {
	if (!root) return 0;
	return root.value + sumList(root.next);
};

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

console.log(sumList(a)); // 19
