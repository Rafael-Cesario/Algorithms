// Giver a sorted array of 'n' uniformly distributed values arr[], write a function to search for a particular element 'x' in the array;
// Time O(log(log n));
// Space O(1);

const interpolationSearch = (array, left, right, target) => {
	let position;

	if (left <= right && target >= array[left] && target <= array[right]) {
		position =
			left + Math.floor(((right - left) / (array[right] - array[left])) * (target - array[left]));

		if (array[position] === target) return position;

		if (array[position] < target) {
			return interpolationSearch(array, position + 1, right, target);
		}

		if (array[position] > target) {
			return interpolationSearch(array, left, position - 1, target);
		}
	}

	return -1;
};

const array = Array(10)
	.fill()
	.map(() => Math.floor(Math.random() * 20));
const sortedArray = array.sort((a, b) => a - b);
const target = Math.floor(Math.random() * 20);
const result = interpolationSearch(sortedArray, 0, sortedArray.length - 1, target);

console.log({ sortedArray, target, result });
