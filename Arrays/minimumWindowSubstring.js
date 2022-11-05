// given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. if there is no such substring, return the empty string "".

// the testcases will be generated such that the answer is unique.

const minwindows = (s, t) => {
	if (t === '') return false;

	const countT = {};
	const window = {};

	for (const letter of t) {
		countT[letter] = 1 + (countT[letter] ?? 0);
	}

	let have = 0;
	let need = Object.keys(countT).length;
	let res = [-1, -1];
	let resLength = Infinity;
	let l = 0;
	let r = 0;

	for (r in s) {
		const letter = s[r];

		window[letter] = 1 + (window[letter] ?? 0);

		if (letter in countT && window[letter] == countT[letter]) {
			have++;
		}

		while (have === need) {
			if (r - l + 1 < resLength) {
				res = [l, r];
				resLength = r - l + 1;
			}

			window[s[l]]--;

			if (s[l] in countT && window[s[l]] < countT[s[l]]) {
				have--;
			}

			l++;
		}
	}

	[l, r] = res;
	return resLength !== Infinity ? s.slice(l, r + 1) : '';
};

console.log(minwindows('ADOBECODEBANC', 'ABC'));