// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

const findPivotIndex = (array) => {
	let leftSum = 0;
	let rightSum = 0;

	// O(N)
	for (let num of array) rightSum += num;

	// O(N)
	for (let index in array) {
		rightSum -= array[index];

		if (leftSum === rightSum) return index;

		leftSum += array[index];
	}

	return -1;
};

console.log(findPivotIndex([1, 7, 3, 6, 5, 6])); // => 3
console.log(findPivotIndex([1, 2, 3])); // => -1
console.log(findPivotIndex([2, 1, -1])); // => 0
