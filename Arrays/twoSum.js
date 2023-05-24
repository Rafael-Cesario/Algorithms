// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time O(n)
// Space O(n)

const twoSum = (nums, target) => {
	const numbersMap = {};

	for (i in nums) {
		const currentNumber = nums[i];
		const necessaryNumber = target - currentNumber;

		const hasNumber = numbersMap[necessaryNumber];
		if (hasNumber) return [i, hasNumber];

		numbersMap[currentNumber] = i;
	}
};
