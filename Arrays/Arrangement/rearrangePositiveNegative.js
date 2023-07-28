// An array contains both positive and negative numbers in random order. Rearrange the array elements so that positive and negative numbers are placed alternatively. A number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.

// Time = O(n);
// Space = O(1);

const rearrange = (array) => {
	let start = -1;

	for (let i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			start++;
			[array[start], array[i]] = [array[i], array[start]];
		}
	}


	let positiveNumbersIndex = start + 1;
	let negativeNumbersIndex = 0;

	while (
		positiveNumbersIndex < array.length &&
		negativeNumbersIndex < positiveNumbersIndex &&
		array[negativeNumbersIndex] < 0
	) {
		[array[positiveNumbersIndex], array[negativeNumbersIndex]] = [
			array[negativeNumbersIndex],
			array[positiveNumbersIndex],
		];
		positiveNumbersIndex += 1;
		negativeNumbersIndex += 2;
	}

	return array;
};

const array = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
const result = rearrange(array);
console.log({ result });
