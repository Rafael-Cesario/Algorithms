// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

const threeSum = (nums) => {
	const res = [];
	nums.sort();

	for (let i in nums) {
		if (i > 0 && nums[i] == nums[Number(i) - 1]) continue;

		let l = Number(i) + 1;
		let r = nums.length - 1;

		while (l < r) {
			let sum = nums[i] + nums[l] + nums[r];

			if (sum > 0) r--;
			if (sum < 0) l++;
			if (sum === 0) {
				res.push([nums[i], nums[l], nums[r]]);
				l++;

				while (nums[l] == nums[l - 1] && l < r) l++;
			}
		}
	}

	return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
