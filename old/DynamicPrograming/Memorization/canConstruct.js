// Write a function 'canConstruct(target, wordBank)' that accepsts a target string and an array of strings.

// The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordbank' array.

// You can reuse elements of 'wordbank'.

// Time = O(n * m^2)
// Space = O(m^2)

const canConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return true;

	for (let word of wordBank) {
		const newTarget = target.slice(word.length);

		if (target.indexOf(word) === 0) {
			const isPossible = canConstruct(newTarget, wordBank, memo);

			if (isPossible) {
				memo[target] = true;
				return memo[target];
			}
		}
	}

	memo[target] = false;
	return memo[target];
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false
