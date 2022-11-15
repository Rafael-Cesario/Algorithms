// Given an array of integers, print the array in such a way that the first element is first maximum and second element is first minimum and so on.

const array = [7, 1, 2, 3, 4, 5, 6];

const alternateSort = (array) => {
	array.sort((a, b) => a - b);

	const result = [];
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		result.push(array[right], array[left]);
		right--, left++;
	}

	if (array.length % 2 != 0) result.push(array[left]);

	return result;
};

const result = alternateSort(array);
console.log({ result });
