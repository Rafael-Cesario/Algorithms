// Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings.

// The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.

// you may reuse elements of 'wordBank' as many times as needed.

// Time = O(n * m^2)
// Space = O(m^2)

const countConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return 1;

	let count = 0;

	for (let word of wordBank) {
		const suffix = target.slice(word.length);

		if (target.indexOf(word) === 0) {
			const construct = countConstruct(suffix, wordBank, memo);
			count += construct;
		}
	}

	memo[target] = count;
	return count;
};

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // => 1
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // => 2

console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 0
