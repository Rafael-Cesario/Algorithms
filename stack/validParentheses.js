// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const validParentheses = (string) => {
	const stack = [];

	const brackets = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	for (let bracket of string) {
		if (bracket.match(/[({[]/)) stack.push(bracket);

		if (bracket.match(/[)}\]]/)) {
			const lastBracket = stack.pop();

			if (brackets[lastBracket] !== bracket) return false;
		}
	}

	return stack.length === 0 ? true : false;
};

console.log(validParentheses('()'));
// => true

console.log(validParentheses('()[]{}'));
// => true

console.log(validParentheses('(]'));
// => false

console.log(validParentheses('({)}'));
// => false
