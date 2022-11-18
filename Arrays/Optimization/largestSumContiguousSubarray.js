// Given an array arr[] of size N. The task is to find the sum of the contiguous
// subarray within a arr[] with the largest sum.

const maxSubarray = (array) => {
	let max = 0;
	let sum = 0;
	let start = 0;
	let end = 0;

	for (let i = 0; i < array.length; i++) {
		const number = array[i];
		sum += number;

		console.log({ number, sum, end });
		if (sum <= 0) {
			sum = 0;
			start = i + 1;
			end = i + 1;
		}

		if (sum > max) {
			max = sum;
			end = i;
		}

		if (sum < max) {
			end = i - 1;
		}
	}

	return { max, start, end };
};

const array = [1, 2, 3, -2, -3, 4, -1, -2, 1, 5, -3];
const result = maxSubarray(array);

console.log({ array, result });
