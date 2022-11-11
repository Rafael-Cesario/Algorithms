// Fibonacci Search is a comparison-based technique that uses Fibonacci numbers to search an element in a sorted array.

// Time O(log n);
// Space O(1);

const fibonacciSearch = (array, target) => {
	let fibMM2 = 0;
	let fibMM1 = 1;
	let fibM = fibMM2 + fibMM1;

	while (fibM < array.length) {
		fibMM2 = fibMM1;
		fibMM1 = fibM;
		fibM = fibMM2 + fibMM1;
	}

	let offset = -1;

	while (fibM > 1) {
		let index = Math.min(offset + fibMM2, array.length - 1);

		if (array[index] === target) return index;

		if (array[index] < target) {
			offset = index;
			fibM = fibMM1;
			fibMM1 = fibMM2;
			fibMM2 = fibM - fibMM2;
		}

		if (array[index] > target) {
			fibM = fibMM2;
			fibMM1 = fibMM1 - fibMM2;
			fibMM2 = fibM - fibMM1;
		}
	}

	if (fibMM1 && array[array.length - 1] === target) return array.length - 1;

	return -1;
};

const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100, 235];
const x = 235;
const result = fibonacciSearch(arr, x);

console.log({ result });
