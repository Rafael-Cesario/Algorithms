// write a function that rotates the array by 'd' elements.

// Time = O(n);
// Space = (log n);

const blockSwap = (array, d, arrayLength) => {
	const swap = (array, left, right, d) => {
		let i = 0;
		while (i < d) {
			const temp = array[left + i];
			array[left + i] = array[right + i];
			array[right + i] = temp;
			i++;
		}

		return array;
	};

	if (arrayLength === d || d === 0) return array;
	if (arrayLength - d === d) return swap(array, 0, arrayLength - d, d);

	if (d < arrayLength - d) {
		array = swap(array, 0, arrayLength - d, d);
		blockSwap(array, d, arrayLength - d);
	} else {
		array = swap(array, 0, d, arrayLength - d);
		blockSwap(array + arrayLength - d, 2 * d - arrayLength, d);
	}

    return array;
};

const array = Array(10)
	.fill()
	.map(() => Math.floor(Math.random() * 11));
console.log({ array });

const rotateTimes = Math.floor(Math.random() * 10);
console.log({ rotateTimes });

const result = blockSwap(array, rotateTimes, array.length);
console.log({ result });
