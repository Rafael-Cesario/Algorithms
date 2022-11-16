// Given a string with lowercase repeated characters, the task is to rearrange characters in a string so that no two adjacent characters are the same. If it is not possible to do so, then print “Not possible”.

const rearrangeString = (string) => {
	const countCharacters = () => {
		const count = {};
		let mostFrequentCharacter = [1, string[0]];

		for (let letter of string) {
			count[letter] = 1 + (count[letter] ?? 0);
			if (count[letter] > mostFrequentCharacter[0]) mostFrequentCharacter = [count[letter], letter];
		}

		return [count, mostFrequentCharacter];
	};

	const [count, mostFrequentCharacter] = countCharacters();

	const halfOfString = Math.floor((string.length + 1) / 2);
	if (halfOfString < mostFrequentCharacter[0]) return 'Not valid string';

	let result = [];
	let i = 0;

	while (mostFrequentCharacter[0]) {
		result[i] = mostFrequentCharacter[1];
		i += 2;
		mostFrequentCharacter[0] -= 1;
	}

	for (let letter of Object.keys(count)) {
		while (count[letter]) {
			if (i >= string.length) i = 1;
			result[i] = letter;
			i += 2;
			count[letter] -= 1;
		}
	}

	return result.join('');
};

const inputs = ['aaabc', 'aaabb', 'aa', 'aaaabc', 'bbbaa'];

for (let input of inputs) {
	const result = rearrangeString(input);
	console.log({ input, result });
}
