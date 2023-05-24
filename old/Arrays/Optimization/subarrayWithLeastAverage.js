// Given an array of size n, Find the subarray with least average of size k.

const leastAverage = (array, size) => {
	let left = 0;
	let right = 0;

	let sum = 0;

	while (right < size) {
		sum += array[right];
		right++;
	}

	right--;

	let average = Math.round(sum / size);
	let index = [0, size - 1];

	while (right < array.length) {
		sum -= array[left];
		left++;

		right++;
		sum += array[right];

		const math = Math.round(sum / size);
		if (average > math) {
			average = math;
			index = [left, right];
		}
	}

	return { average, index };
};

const array = [30, 20, 10];
const size = 2;
const result = leastAverage(array, size);

console.log({ array, size });
console.log({ result });
