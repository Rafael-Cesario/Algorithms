// Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and a array of numbers as arguments.

// The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.

// If there are multiple combination possible, you may return any single one.

// Time = O(n*m^2)
// Space = O(m^2)

const howSum = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let number of numbers) {
		const target = targetSum - number;
		const arraySum = howSum(target, numbers, memo);
		const isArray = Array.isArray(arraySum);

		if (isArray) {
			memo[targetSum] = [...arraySum, number];
			return memo[targetSum];
		}
	}

	memo[targetSum] = null;
	return null;
};

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [ 4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null
