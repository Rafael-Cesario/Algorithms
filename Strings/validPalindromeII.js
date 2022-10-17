// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

const validPalindrome = (string) => {
	const s = string
		.toLowerCase()
		.split('')
		.filter((letter) => letter.match(/[a-z]/));

	let a = 0;
	let b = string.length - 1;

	let deleted = null;

	while (a < b) {
		if (s[a] !== s[b] && !deleted) {
			b--;
			deleted = 'b';
		}

		if (s[a] !== s[b] && deleted === 'b') {
			b++;
			a++;
			deleted = 'a';
		}

		if (s[a] !== s[b] && deleted === 'a') return false;

		a++;
		b--;
	}

	return true;
};

console.log(validPalindrome('aba')); // => true
console.log(validPalindrome('abca')); // => true
console.log(validPalindrome('abc')); // => false;
