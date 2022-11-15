// Given a string Str. The task is to check if it is Pangram or not.
// A pangram is a sentence containing every letter in the English Alphabet.

const isPangram = (string) => {
	const letters = Array(26).fill(false);

	for (let letter in string) {
		if (!string[letter].match(/[a-z]/i)) continue;

		let index = string.toLowerCase().charCodeAt(letter);
		index -= 97;
		letters[index] = true;
	}

	for (let letter of letters) if (!letter) return false;

	return true;
};

const string = 'The quick brown fox jumps over the lazy dog';
const result = isPangram(string);
console.log({ result });
