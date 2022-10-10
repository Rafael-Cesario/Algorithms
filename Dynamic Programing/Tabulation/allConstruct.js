// Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.

// The function should return a 2d array containig all of the ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array. Each element of the 2d array should represent one combination that constructs the 'target'.

// You may reuse elements of 'wordBank' as many times as needed.

// Time ~O(n^m)
// Space ~o(n^m)

const allConstruct = (target, wordBank) => {
	const table = Array(target.length + 1)
		.fill()
		.map(() => []);

	table[0] = [[]];

	for (let index = 0; index <= target.length; index++) {
		for (let word of wordBank) {
			if (target.slice(index, index + word.length) === word) {
				const newCombinations = table[index].map((array) => [...array, word]);

				table[index + word.length].push(...newCombinations);
			}
		}
	}

	return table[target.length];
};

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
// => [
//   [ 'abc', 'def' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abcd', 'ef' ],
//   [ 'ab', 'cd', 'ef' ]
// ]

console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// => []

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// => [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]

console.log(allConstruct('eeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));
// => []
