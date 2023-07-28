// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const validPalindrome = (string) => {
	if (string.length === 1) return true;

	const s = string
		.toLowerCase()
		.split('')
		.filter((letter) => letter.match(/[a-z]/g));

	let a = 0;
	let b = s.length - 1;

	while (b > a) {
		if (s[a] !== s[b]) return false;

		a++;
		b--;
	}

	return true;
};

console.log(validPalindrome('A man, a plan, a canal: Panama')); // => true;
console.log(validPalindrome('race a car')); // => false;
console.log(validPalindrome(' ')); // => true;
