// Given two linked lists, the task is to check whether the first list is present in 2nd list or not.

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

// Time O(m * n);
// Space O(1);

const findList = (first, second) => {
	let part1 = first;
	let part2 = second;

	if (!first && !second) return true;
	if (!first || (first && !second)) return false;

	while (second) {
		part2 = second;

		while (part1) {
			if (!part2) return false;
			else if (part1.value === part2.value) {
				part1 = part1.next;
				part2 = part2.next;
			} else break;
		}

		if (!part1) return true;

		part1 = first;

		second = second.next;
	}

	return false;
};

const listA = createList([1, 2, 3, 4]);
const listB = createList([1, 2, 1, 2, 3, 4]);

const result = findList(listA, listB);

console.log({ result });
