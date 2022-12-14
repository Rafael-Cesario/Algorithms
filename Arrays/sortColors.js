// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

const sortColors = (nums) => {
	let l = 0;
	let r = nums.length - 1;
	let i = 0;

	const switchPositions = (a, b) => {
		const temp = nums[a];
		nums[a] = nums[b];
		nums[b] = temp;
	};

	while (i <= r) {
		if (nums[i] === 0) {
			switchPositions(i, l);
			l++;
		}

		if (nums[i] === 2) {
			switchPositions(i, r);
			i--, r--;
		}

		i++;
	}

	return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
