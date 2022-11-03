// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

const twoSum = (numbers, target) => {
	let l = 0;
	let r = numbers.length - 1;

	while (l < r) {
		const sum = numbers[l] + numbers[r];

		if (sum > target) r--;
		if (sum < target) l++;
		if (sum === target) return [l + 1, r + 1];
	}
};

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]

console.log(twoSum([2, 7, 11, 15], 9));
