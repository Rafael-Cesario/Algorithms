var isSubsequence = function (s, t) {
	let l = 0;
	let r = 0;

	while (l <= s.length - 1) {
		const left = s[l];
		const right = t[r];

		if (!right) return false;
		if (left === right) l++;

		r++;
	}

	return true;
};
