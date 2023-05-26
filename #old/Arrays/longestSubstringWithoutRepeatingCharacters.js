// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
	const characters = new Set();
	let l = 0;
	let max = 0;

	for (let r in s) {
		while (characters.has(s[r])) {
			characters.delete(s[l]);
			l++;
		}

		characters.add(s[r]);
		max = Math.max(max, characters.size);
	}

	return max;
};

console.log(lengthOfLongestSubstring('pwwkew'));

// Input: s = "abcabcbb"
// Output: 3
