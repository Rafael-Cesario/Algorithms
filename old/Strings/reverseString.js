// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

const reverseString = (string) => {
	let a = 0;
	let b = string.length - 1;

	while (a < b) {
		const current = string[a];

		string[a] = string[b];
		string[b] = current;

		a++;
		b--;
	}

	return string;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // => ["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // => ["h","a","n","n","a","H"]
