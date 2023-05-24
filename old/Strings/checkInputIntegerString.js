// Write a function to check whether a given input is an integer or a string.
// Definition of an integer :
// Every element should be a valid digit, i.e '0-9'.
// Definition of a string :
// Any one element should be an invalid digit, i.e any symbol other than '0-9'.

const checkString = (string) => {
	for (let letter of string) {
		if (letter.match(/[^0-9]/)) return 'string';
	}

	return 'integer';
};

const inputs = ['127', '199.7', '122B', 'test'];

for (let input of inputs) {
	const result = checkString(input);
	console.log({ input, result });
}
