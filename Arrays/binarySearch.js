// Given an array of integers 'nums' which is sorted in ascending order and an integer target, write a function to search 'target' in 'nums'. If 'target' exist, then return its index. Otherwise return -1.

// You must write an algorithm with O(log n) runtime complexity.

const binarySearch = (nums, target) => {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		const mid = Math.ceil((l + r) / 2);

		if (target === nums[mid]) return mid;
		if (target <= nums[mid]) r = mid - 1;
		else l = mid + 1;
	}

	return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([[-1, 0, 3, 5, 9, 12]], 2)); // -1
