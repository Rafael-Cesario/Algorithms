// Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

// The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.

// Time = O(m * n)
// Space = O(m)

const canSum = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;

	for (let number of numbers) {
		const newTarget = targetSum - number;
		if (canSum(newTarget, numbers, memo) === true) {
			memo[targetSum] = true;
			return true;
		}
	}

	memo[targetSum] = false;
	return false;
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
