// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

const arrangeCoins = (n) => {
	let l = 1;
	let r = n;
	let result = 0;

	while (l <= r) {
		const mid = Math.ceil((l + r) / 2);
		const coins = (mid / 2) * (mid + 1);

		if (coins > n) r = mid - 1;
    
		if (coins < n) {
			l = mid + 1;
			result = Math.max(mid, result);
		}
	}

	return result;
};

console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3
