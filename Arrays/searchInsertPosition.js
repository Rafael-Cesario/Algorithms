// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const insertPosition = (nums, target) => {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		const mid = Math.ceil((l + r) / 2);

		if (target === nums[mid]) return mid;
		if (target > nums[mid]) l = mid + 1;
		if (target < nums[mid]) r = mid - 1;
	}

	return l;
};

console.log(insertPosition([1, 3, 5, 6], 5)); // 2
console.log(insertPosition([1, 3, 5, 6], 2)); // 1
console.log(insertPosition([1, 3, 5, 6], 7)); // 4
console.log(insertPosition([1, 3, 5, 6], 4)); // 2
console.log(insertPosition([1, 3, 5, 7], 6)); // 3
