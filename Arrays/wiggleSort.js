// Given an unsorted array nums, reorder it in-place such that
// nums[0] <= nums[1] >= nums[2] <= nums[3]....

const wiggleSort = (nums) => {
	const swap = (a, b) => {
		const temp = nums[a];
		nums[a] = nums[b];
		nums[b] = temp;
	};

	for (let i = 1; i < nums.length; i++) {
		if (i % 2 === 1 && nums[i] < nums[i - 1]) swap(i, i - 1);
		if (i % 2 === 0 && nums[i] > nums[i - 1]) swap(i, i - 1);
	}

	return nums;
};

console.log(wiggleSort([3, 5, 2, 1, 6, 4]));
