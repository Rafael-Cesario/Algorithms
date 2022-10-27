// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

const longestSequence = (nums) => {
	const values = new Set(nums);

	let max = 0;
	let count = 0;

	for (let n of values) {
		count = 1;

		if (values.has(n - 1)) continue;

		let x = 1;
		while (values.has(n + x)) {
			count++;
			x++;
		}

		max = Math.max(max, count);
	}

	return max;
};

console.log(longestSequence([100, 4, 200, 1, 3, 2]));
