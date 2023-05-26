// Given a string, find all characters that are missing from the string, i.e., the characters that can make the string a Pangram. We need to print output in alphabetic order.

const missingLetters = (string) => {
	const letters = Array(26)
		.fill()
		.map((value, index) => String.fromCharCode(index + 97));

	for (let letter in string) {
		if (!string[letter].match(/[a-z]/i)) continue;

		const index = string.toLowerCase().charCodeAt(letter) - 97;
		letters[index] = true;
	}

	for (let letter in letters) {
		if (letters[letter] !== true) letters.push(letters[letter]);
	}

	letters.splice(0, 26);

	return letters;
};

const string = 'The quick brown fox jumps';
const result = missingLetters(string);
console.log({ result });
