// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1, 2, 3, 1];
// Output: true;

// Input: nums = [1, 2, 3, 4];
// Output: false;

// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// Output: true;

// const containsDuplicate = (array) => {
// 	let index = 0;
// 	while (index < array.length) {
// 		const current = array[index];

// 		let index02 = index + 1;
// 		while (index02 < array.length) {
// 			if (current === array[index02]) return true;

// 			index02++;
// 		}

// 		index++;
// 	}

// 	return false;
// };

const containsDuplicate = (array) => {
	const set = new Set();

	for (number of array) {
		if (set.has(number)) return true;
		set.add(number);
	}

	return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // => true
console.log(containsDuplicate([1, 2, 3, 4])); // => false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // => true
