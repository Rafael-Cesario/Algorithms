// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

const generateParenthesis = (n) => {
	const stack = [];
	const result = [];

	const generate = (openN, closeN) => {
		if (openN === n && closeN === n) return result.push(stack.join(''));

		if (openN < n) {
      stack.push('(');
			generate(openN + 1, closeN);
      stack.pop();
		}

		if (closeN < openN) {
      stack.push(')');
			generate(openN, closeN + 1);
      stack.pop();
		}
	};

	generate(0, 0);
	return result;
};

console.log(generateParenthesis(3));
