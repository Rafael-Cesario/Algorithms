// Write a function 'canConstruct(target, wordBank)' that accepsts a target string and an array of strings.

// The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank' array.

// You may reuse elements of 'wordBank' as many times as needed.

// Time = O(m^2*n)
// Space = O(m^2)

const canConstruct = (target, wordBank) => {
	const table = Array(target.length + 1).fill(false);
	table[0] = true;

	for (let i = 0; i <= target.length; i++) {
		if (table[i]) {
			for (let word of wordBank) {
				if (target.slice(i, i + word.length) === word) {
					table[i + word.length] = true;
				}
			}
		}
	}

	return table[target.length];
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // => true;
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee'])); // false
