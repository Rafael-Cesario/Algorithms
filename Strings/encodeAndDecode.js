// Design an algorith to encode a list of strings to a string. The encoded string is the sent over the network and is decoded back to the original list of strings.

const encode = (strings) => {
	let result = '';

	for (let s in strings) {
		result += strings[s].length + '#' + strings[s];
	}

	return result;
};

const decode = (string) => {
	let result = [];
	let i = 0;

	while (i < string.length) {
		let j = i;
		while (string[j] !== '#') j++;

		const stringLength = Number(string.slice(i, j));
		result.push(string.substr(j + 1, stringLength));
		i = j + 1 + stringLength;
	}

	return result;
};

const encoded = encode(['lint', 'code', 'love', 'you']);
const decoded = decode(encoded);

console.log({ encoded, decoded });
