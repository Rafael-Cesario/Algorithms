// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

const findAnagrams = (s, p) => {
	const isEqual = () => {
		let equal = true;

		for (let i in pCount) {
			const pLetter = pCount[i];
			const sLetter = sCount[i];

			if (pLetter !== sLetter) equal = false;
		}

		return equal;
	};

	if (p.length > s.length) return [];

	const pCount = {};
	const sCount = {};

	for (let i in p) {
		const pLetter = p[i];
		const sLetter = s[i];

		pCount[pLetter] = 1 + (pCount[pLetter] ?? 0);
		sCount[sLetter] = 1 + (sCount[sLetter] ?? 0);
	}

	const res = [];
	if (isEqual()) res.push(0);

	let l = 0;
	for (let i = p.length; i <= s.length; i++) {
		sCount[s[i]] = 1 + (sCount[s[i]] ?? 0);

		sCount[s[l]]--;
		if (sCount[s[l]] === 0) delete sCount[s[l]];
		l++;

		if (isEqual()) res.push(l);
	}

	return res;
};

console.log(findAnagrams('cbaebabacd', 'abc'));

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
