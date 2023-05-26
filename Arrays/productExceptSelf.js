// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
	const answer = [1];

	let i = 0;
	while (answer.length < nums.length) {
		const prefixProduct = nums[i] * answer[answer.length - 1];
		answer.push(prefixProduct);
		i++;
	}

	i = nums.length - 1;
	let postFix = 1;
	while (i >= 0) {
		const product = answer[i] * postFix;
		answer[i] = product;
		postFix = nums[i] * postFix;
		i--;
	}

	return answer;
};
