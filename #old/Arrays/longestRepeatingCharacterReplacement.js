// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

const characterReplacement = (s, k) => {
	const count = {};
	let max = 0;
	let l = 0;
	let maxF = 0;

	for (let r in s) {
		count[s[r]] = 1 + (count[s[r]] ?? 0);
		maxF = Math.max(maxF, count[s[r]]);

		while (r - l + 1 - maxF > k) {
			count[s[l]] -= 1;
			l++;
		}

		max = Math.max(max, r - l + 1);
	}

	return max;
};

console.log(characterReplacement('AABABBA', 2));

// Input: s = "ABAB", k = 2
// Output: 4
