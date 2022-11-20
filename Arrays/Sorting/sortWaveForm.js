// Given an unsorted array of integers, sort the array into a wave array. An array arr[0..n-1] is sorted in wave form if:
// arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..

const waveSort = (array) => {
	const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]]);

	for (let i = 0; i < array.length; i += 2) {
		if (i > 0 && array[i - 1] > array[i]) swap(array, i - 1, i);
		if (i < array.length - 1 && array[i] < array[i + 1]) swap(array, i, i + 1);
	}

	return array;
};

const array = [10, 90, 49, 2, 1, 5, 23];
console.log({ array });

const result = waveSort(array);
console.log({ result });
