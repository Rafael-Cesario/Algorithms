// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubSequence = (string01, string02) => {
	let a = 0;
	let b = 0;

	while (a < string01.length && b < string02.length) {
		if (string01[a] === string02[b]) {
			a++;
			b++;
		} else {
			b++;
		}
	}

	return string01.length === a ? true : false;
};

console.log(isSubSequence('abc', 'ahbgdc')); // => true
