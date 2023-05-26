// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
	const map = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	const stack = [];

	for (bracket of s) {
		const isOpenBracket = bracket === "(" ? true : bracket === "[" ? true : bracket === "{" ? true : false;

		if (isOpenBracket) stack.push(bracket);
		else {
			const lastBracket = stack.pop();
			if (lastBracket !== map[bracket]) return false;
		}
	}

	return stack.length ? false : true;
};
