// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const hasCycle = (head) => {
	let [slow, fast] = [head, head];

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) return true;
	}

	return false;
};

const [a, b, c, d] = [new Node(3), new Node(2), new Node(0), new Node(-4)];

a.next = b;
b.next = c;
c.next = d;
d.next = b;

console.log(hasCycle(a));
