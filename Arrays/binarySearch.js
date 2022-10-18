// Given an array of integers 'nums' which is sorted in ascending order and an integer target, write a function to search 'target' in 'nums'. If 'target' exist, then return its index. Otherwise return -1.

// You must write an algorithm with O(log n) runtime complexity.

const binarySearch = (nums, target) => {
	for (let left in nums) {
		const right = nums.length - 1;
		const middle = Math.ceil(+left + (right - +left) / 2);

		if (nums[middle] === target) return middle;
		if (target > nums[middle]) nums.slice(middle + 1);
		if (target < nums[middle]) nums.slice(0, middle - 1);
	}

	return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([[-1, 0, 3, 5, 9, 12]], 2));
