// Given an array and a number K where K is smaller than the size of the array. Find the K’th smallest element in the given array. Given that all array elements are distinct.

const kthSmallest = (array, k) => {
	array.sort((a, b) => a - b);

	return array[k - 1];
};

const array = [12, 3, 5, 7, 19];
const k = 2;
const result = kthSmallest(array, k);
console.log({ array, k, result });
