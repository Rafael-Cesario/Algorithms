// Given an unsorted array and an element x, search x in the given array. Write recursive C code for this. If the element is not present, return -1.

// Time O(N);
// Space O(N);
const recursiveSearch = (array, target, left, right) => {
	if (left > right) return -1;

	if (target === array[left]) return left;
	if (target === array[right]) return right;

	return recursiveSearch(array, target, left + 1, right - 1);
};

const array = Array(20)
	.fill()
	.map(() => Math.floor(Math.random() * 21));
const target = Math.floor(Math.random() * 21);
const result = recursiveSearch(array, target, 0, array.length - 1);

console.log({ array, target, result });
