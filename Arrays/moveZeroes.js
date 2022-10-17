// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

const moveZeroes = (nums) => {
	let index = 0;
	let zeroIndex = 0;

	while (index < nums.length) {
		if (nums[index] !== 0) {
			nums[zeroIndex] = nums[index];
			nums[index] = 0;
			zeroIndex++;
		}

		index++;
	}

	return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // => [1, 3, 12, 0, 0]
console.log(moveZeroes([0])); // => [0]
