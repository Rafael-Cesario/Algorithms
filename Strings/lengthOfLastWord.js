// Given a string s consisting of words and spaces, return the length of the last word in the string.

const lengthOfLastWord = (string) => {
	let newString = '';
	let index = string.length - 1;

	while (index >= 0) {
		if (string[index] === ' ' && newString !== '') {
			return `The last word is "${newString}" with length ${newString.length}`;
		}

		if (string[index] !== ' ') {
			newString = string[index] + newString;
		}

		index--;
	}
};

console.log(lengthOfLastWord('Hello World'));
// => The last word is "World" with length 5.

console.log(lengthOfLastWord(' fly me   to   the moon '));
// => The last word is "moon" with length 4.

console.log(lengthOfLastWord('luffy is still joyboy'));
// => The last word is "joyboy" with length 6.
