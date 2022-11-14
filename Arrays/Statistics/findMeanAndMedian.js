// Given an unsorted array a[] of size N, the task is to find its mean and median.

const findMean = (array) => {
	let total = 0;

	for (let num of array) total += num;

	return total / array.length;
};

const array = [1, 3, 4, 2, 6, 5, 8, 7];
console.log({ array });

const mean = findMean(array);
console.log({ mean });

const findMedian = (array) => {
	array.sort((a, b) => a - b);

	const isArrayEven = array.length % 2 === 0;

	if (isArrayEven) {
		const a = array[Math.floor((array.length - 1) / 2)];
		const b = array[array.length / 2];
		return (a + b) / 2;
	}

	if (!isArrayEven) {
		return array[array.length / 2];
	}
};

const median = findMedian(array);
console.log({ median });
