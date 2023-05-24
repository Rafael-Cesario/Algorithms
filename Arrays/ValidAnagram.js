// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Time O(s + t)
// Space o(s)
const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;

	const sLettersMap = {};

	for (letter of s) {
		sLettersMap[letter] = (sLettersMap[letter] ?? 0) + 1;
	}

	for (letter of t) {
		const sHasLetter = sLettersMap[letter] ?? false;
		if (!sHasLetter) return false;

		sLettersMap[letter] = sLettersMap[letter] - 1;
		if (sLettersMap[letter] === 0) delete sLettersMap[letter];
	}

	return true;
};
