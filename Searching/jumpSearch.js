// Jump Search is a searching algorithm for sorted arrays.
// The best step size is m = √n

// Time complexity = O(√n);
// Space complexity = O(1);

const jumpSearch = (array, target) => {
	const jumpSize = Math.sqrt(array.length);
	let previousBlock = 0;

	while (array[Math.min(jumpSize, array.length) - 1] < target) {
		previousBlock = jumpSize;
		jumpSize += Math.sqrt(array.length);

		if (previousBlock >= array.length) return -1;
	}

	while (array[previousBlock] < target) {
		previousBlock++;

		if (previousBlock === Math.min(jumpSize, array.length)) return -1;
	}

	if (array[previousBlock] === target) return previousBlock;

	return -1;
};

const array = Array(10)
	.fill()
	.map(() => Math.floor(Math.random() * 31));
const sortedArray = array.sort((a, b) => a - b);
const target = Math.floor(Math.random() * 31);

console.log({ sortedArray, target, result: jumpSearch(sortedArray, target) });
