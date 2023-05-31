var longestCommonPrefix = function (strs) {
	let prefix = "";

	for (let i = 0; i < strs[0].length; i++) {
		const temp = strs[0][i];

		for (s of strs) {
			const letter = s[i];
			if (letter !== temp) return prefix;
		}

		prefix += temp;
	}

	return prefix;
};
