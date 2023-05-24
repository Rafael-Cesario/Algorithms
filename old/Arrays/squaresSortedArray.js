// Given an integer array 'nums' sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums) => {
	const result = [];

	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		if (Math.abs(nums[l]) > Math.abs(nums[r])) {
			result.unshift(nums[l] * nums[l]);
			l++;
		} else {
			result.unshift(nums[r] * nums[r]);
			r--;
		}
	}

	return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
