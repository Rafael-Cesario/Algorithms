// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

const checkInclusion = (s1, s2) => {
	const s1Map = {};

	const s2Map = {};

	for (const letter of s1) s1Map[letter] = 1 + (s1Map[letter] ?? 0);

	let l = 0;
	let r = s1.length - 1;

	while (l <= r) {
		s2Map[s2[l]] = 1 + (s2Map[s2[l]] ?? 0);
		l++;
	}

	l = 0;

	while (r <= s2.length) {
		let isEqual = true;
		for (const letter of Object.keys(s1Map)) {
			if (s1Map[letter] !== s2Map[letter]) isEqual = false;
		}

		if (isEqual) return true;

		r++;

		s2Map[s2[r]] = 1 + (s2Map[s2[r]] ?? 0);
		s2Map[s2[l]]--;
		s2Map[s2[l]] === 0 && delete s2Map[s2[l]];

		l++;
	}

	return false;
};

console.log(checkInclusion('ab', 'eidboaoo'));

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
