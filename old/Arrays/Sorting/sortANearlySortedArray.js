// Given an array of n elements, where each element is at most k away from its target position, devise an algorithm that sorts in O(n log k) time. For example, let us consider k is 2, an element at index 7 in the sorted array, which can be at indexes 5, 6, 7, 8, 9 in the given array.

const sort = (array) => {
	for (let i = 1; i < array.length; i++) {
		let key = array[i];
		let j = i - 1;

		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j];
			j -= 1;
		}

		array[j + 1] = key;
	}

	return array;
};

// Input : arr[] = {6, 5, 3, 2, 8, 10, 9}
const array = [6, 5, 3, 2, 8, 10, 9];
const result = sort(array);

console.log({ result });
