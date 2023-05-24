// Given the head of a linked list. The task is to find if a loop exists in the linked list if yes then return the length of the loop in the linked list else return 0.

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const lengthOfLoop = (head) => {
	const map = {};

	while (head) {
		if (head.value in map) {
			let left = head;
			let right = head.next;
			let count = 1;

			while (left != right) {
				right = right.next;
				count += 1;
			}

			return `Length of loop: ${count}`;
		}

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

const result = lengthOfLoop(a);
console.log({ result });
