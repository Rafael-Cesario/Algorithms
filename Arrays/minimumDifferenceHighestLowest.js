// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

// Return the minimum possible difference.

const minimumDifference = (numsArray, integer) => {
	const sorted = numsArray.sort((a, b) => a - b);

	let l = 0;
	let r = integer - 1;
	let result = Infinity;

	while (r < numsArray.length) {
		result = Math.min(result, sorted[r] - sorted[l]);

		l++;
		r++;
	}

	return result;
};

console.log(minimumDifference([90], 1)); // => 0
console.log(minimumDifference([9, 4, 1, 7], 2)); // => 2
