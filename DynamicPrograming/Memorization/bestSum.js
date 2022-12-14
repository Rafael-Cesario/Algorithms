// Write a fuction 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

// if there is a tie for the sortest combination, you may return any one of the shortest.

// Time =  O(m^2 * n)
// Space = O(m^2)

const bestSum = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortest = null;

	for (let number of numbers) {
		const sum = bestSum(targetSum - number, numbers, memo);

		if (sum !== null) {
			const combination = [...sum, number];

			if (shortest === null || combination.length < shortest.length) {
				shortest = combination;
			}
		}
	}

	memo[targetSum] = shortest;
	return shortest;
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [5, 3]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
