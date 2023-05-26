// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

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

const reorderList = (head) => {
	const getMid = () => {
		let [slow, fast] = [head, head];

		while (fast && fast.next) {
			slow = slow.next;
			fast = fast.next.next;
		}

		return slow;
	};

	const reverseFromMid = (mid) => {
		let [previous, current, next] = [null, mid, null];

		while (current) {
			next = current.next;
			current.next = previous;

			previous = current;
			current = next;
		}

		return previous;
	};

	const mergeLists = (list1, list2) => {
		let [temp1, temp2] = [list1.next, list2.next];

		while (list2.next) {
			list1.next = list2;
			list2.next = temp1;

			list1 = temp1;
			list2 = temp2;

			temp1 = list1.next;
			temp2 = list2.next;
		}

		return head;
	};

	const mid = getMid();
	const reversed = reverseFromMid(mid);
	const reorder = mergeLists(head, reversed);

	return reorder;
};

const result = reorderList(list1);
console.log({ result });
