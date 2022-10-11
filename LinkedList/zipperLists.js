class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

// const zipperLists = (root01, root02) => {
// 	let tail = root01;
// 	let current01 = root01.next;
// 	let current02 = root02;
// 	let count = 0;

// 	while (current01 && current02) {
// 		if (count % 2 === 0) {
// 			tail.next = current02;
// 			current02 = current02.next;
// 		} else {
// 			tail.next = current01;
// 			current01 = current01.next;
// 		}

// 		tail = tail.next;
// 		count++;
// 	}

// 	if (current01) tail.next = current01;
// 	if (current02) tail.next = current02;

// 	return root01;
// };

const zipperLists = (root01, root02) => {
	if (!root01 && !root02) return null;
	if (!root01) return root02;
	if (!root02) return root01;

	const next01 = root01.next;
	const next02 = root02.next;

	root01.next = root02;
	root02.next = zipperLists(next01, next02);

	return root01;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z
