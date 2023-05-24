// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time Complexity O(n)
// Space Complexity O(n)
const containsDuplicate = (nums) => {
	const map = new Set();

	for (number of nums) {
		const isDuplicate = map.has(number);
		if (isDuplicate) return true;

		map.add(number);
	}

	return false;
};
