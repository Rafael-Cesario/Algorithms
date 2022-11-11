// Find a range where element may be present.
// Then use binary search to find the element.

// Time O(log n);
// Space O(log n);
const binarySearch = (array, left, right, target) => {
	if (left > right) return -1;

	const mid = Math.ceil(left + (right - left) / 2);

	if (array[mid] === target) return mid;

	if (array[mid] < target) return binarySearch(array, mid + 1, right, target);

	return binarySearch(array, left, mid - 1, target);
};

// Time O(log n);
// Space O(1);
const exponentialSearch = (array, target) => {
	if (array[0] === target) return 0;

	let index = 1;
	while (index < array.length && array[index] <= target) {
		index *= 2;
	}

	const left = index / 2;
	const right = Math.min(index, array.length - 1);

	return binarySearch(array, left, right, target);
};

const array = Array(10)
	.fill()
	.map(() => Math.floor(Math.random() * 21))
	.sort((a, b) => a - b);

const target = Math.floor(Math.random() * 21);
const result = exponentialSearch(array, target);

console.log({ array, target, result });
