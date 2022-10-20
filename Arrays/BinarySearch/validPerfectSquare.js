// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

const validSquare = (n) => {
	let l = 0;
	let r = n;

	while (l <= r) {
		const mid = Math.ceil((l + r) / 2);
		const square = mid * mid;

		if (square === n) return true;

		if (square > n) r = mid - 1;
		else l = mid + 1;
	}

	return false;
};

console.log(validSquare(16)); // true
console.log(validSquare(14)); // false
