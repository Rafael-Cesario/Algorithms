// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

const subArraySum = (nums, k) => {
	let result = 0;
	let currentSum = 0;
	const prefixSum = { 0: 1 };

	for (let n in nums) {
		currentSum += nums[n];
		let diff = currentSum - k;

		result += prefixSum[diff] ?? 0;
		prefixSum[currentSum] = 1 + (prefixSum[currentSum] ?? 0);
	}

	return result;
};

console.log(subArraySum([1, 1, 1], 2)); // 2
console.log(subArraySum([1, 2, 3], 3)); // 2
