// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

const productExceptSelf = (nums) => {
	const result = [];
	let count = 1;

	for (let i in nums) {
		result[i] = count;
		count *= nums[i];
	}

	count = 1;

	for (let i = nums.length - 1; i >= 0; i--) {
		result[i] *= count;
		count *= nums[i];
	}

	return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // => [24, 12, 8, 6]
