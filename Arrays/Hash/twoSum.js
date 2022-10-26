// Given an array of integer `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

// You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [1, 0]

const twoSum = (numbers, target) => {
	const previous = {};

	for (let index = 0; index < numbers.length; index++) {
		const current = numbers[index];
		const newTarget = target - current;
		const index02 = previous[newTarget];

		if (index02 != null) return [index, index02];

		previous[current] = index;
	}
};

console.log(twoSum([2, 7, 11, 15], 9));
