// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

const disappearedNumbers = (array) => {
	const missingValues = new Set();

	let index = 1;
	while (index <= array.length) {
		missingValues.add(index);
		index++;
	}

	for (let num of array) {
		missingValues.delete(num);
	}

	return missingValues;
};

console.log(disappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// => [5, 6]

console.log(disappearedNumbers([1, 1])); // => 2
