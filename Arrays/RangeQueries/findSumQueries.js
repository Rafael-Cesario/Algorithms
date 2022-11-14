// We are given an array and a set of query ranges, we are required to find the sum of every query range.

const array = [1, 1, 2, 1, 3, 4, 5, 2, 8];
const query = [
	[0, 4],
	[1, 3],
	[2, 4],
];

const querySums = (array, query) => {
	query.sort((a, b) => a[1] - b[1]);

	let result = [];
	let total = 0;
	let left = 0;
	let right = 0;

	for (let currentQuery of query) {
		let [L, R] = currentQuery;

		while (left < L) {
			total -= array[left];
			left++;
		}

		while (left > L) {
			total += array[left];
			left--;
		}

		while (right <= R) {
			total += array[right];
			right++;
		}

		while (right > R + 1) {
			total -= array[right - 1];
			right--;
		}

		result.push(total);
	}

	return result;
};

const result = querySums(array, query);
console.log({ result });
