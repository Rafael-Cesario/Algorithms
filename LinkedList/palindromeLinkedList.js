class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const createClass = (array) => {
	const head = new Node(array[0]);
	let tail = head;

	let i = 1;
	while (i < array.length) {
		tail.next = new Node(array[i]);
		tail = tail.next;
		i++;
	}

	return head;
};

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// time O(n) , space O(n)
// const palindromeLinkedList = (head) => {
// 	const nums = [];

// 	while (head) {
// 		nums.push(head.value);
// 		head = head.next;
// 	}

// 	let l = 0;
// 	let r = nums.length - 1;
// 	while (l <= r) {
// 		if (nums[l] !== nums[r]) return false;
// 		l++, r--;
// 	}

// 	return true;
// };

// time o(n) , space o(1)
const palindromeLinkedList = (head) => {
	let slow = head;
	let fast = head;

	// to find the middle
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
	}

	// reverse the list from middle.
	let prev = null;

	while (slow) {
		let temp = slow.next;
		slow.next = prev;
		prev = slow;
		slow = temp;
	}

	// check if is equal
	let l = head;
	let r = prev;

	while (r) {
		if (l.value !== r.value) return false;
		l = l.next;
		r = r.next;
	}

	return true;
};

console.log(palindromeLinkedList(createClass([1, 2, 2, 1]))); // true
console.log(palindromeLinkedList(createClass([1, 2]))); // false
