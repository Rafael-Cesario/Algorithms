// You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.

// Return the minimum number of swaps to make s balanced.

const minSwaps = (s) => {
	let close = 0;
	let maxClose = 0;

	for (let i of s) {
		if (i === '[') close -= 1;
		if (i === ']') close += 1;

		maxClose = Math.max(close, maxClose);
	}

	return Math.floor((maxClose + 1) / 2);
};

console.log(minSwaps(']]][[['));
