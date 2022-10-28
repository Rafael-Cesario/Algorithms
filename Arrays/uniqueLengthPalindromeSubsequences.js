// Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

// Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

// A palindrome is a string that reads the same forwards and backwards.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".

const countPalindromicSubsequence = (s) => {
	const res = new Set();
	const left = new Set();
	const right = {};

	for (let l of s) right[l] = 1 + (right[l] ?? 0);

	for (let i in s) {
		right[s[i]] -= 1;
		if (right[s[i]] === 0) delete right[s[i]];

		// get the 'j' ASCII character, from a - z
		for (let j = 97; j < 123; j++) {
			const c = String.fromCharCode(j);
			if (left.has(c) && c in right) res.add(`${s[i]} ${c}`);
		}

		left.add(s[i]);
	}

	return res.size;
};

console.log(countPalindromicSubsequence('bbcbaba'));
