// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Time O(n)

var topKFrequent = function (nums, k) {
	const mostFrequent = [];
	const counter = new Array(nums.length + 1).fill().map((i) => []);
	const frequenc = {};

	for (number of nums) {
		frequenc[number] = (frequenc[number] ?? 0) + 1;
	}

	Object.entries(frequenc).forEach(([key, value]) => {
		counter[value].push(key);
	});

	let index = nums.length;
	while (mostFrequent.length < k && index >= 0) {
		counter[index]?.length && mostFrequent.push(...counter[index]);
		index--;
	}

	return mostFrequent;
};
