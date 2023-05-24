// Given the heights of N towers and a value of K, Either increase or decrease the height of every tower by K (only once) where K > 0. After modifications, the task is to minimize the difference between the heights of the longest and the shortest tower and output its difference.

const minimizeHeights = (array, k) => {
	array.sort((a, b) => a - b);

	let minHeight = array[0];
	let maxHeight = array[array.length - 1];
	let minDiff = maxHeight - minHeight;

	for (let i = 1; i < array.length; i++) {
		minHeight = Math.min(array[0] + k, array[i] - k);
		maxHeight = Math.max(array[i - 1] + k, array[array.length - 1] - k);
		minDiff = Math.min(minDiff, maxHeight - minHeight);
	}

	return minDiff;
};

const array = [7, 4, 8, 8, 8, 9];
const k = 6;
const result = minimizeHeights(array, k);

console.log({ array, k, result });
