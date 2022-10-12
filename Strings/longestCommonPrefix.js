// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (array) => {
	let common = '';

	for (let letter in array[0]) {
		let index = 1;

		while (index < array.length) {
			if (array[0][letter] !== array[index][letter]) return common;
			index++;
		}

		common += array[0][letter];
	}

	return common;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// => 'fl'

console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
// => ''
