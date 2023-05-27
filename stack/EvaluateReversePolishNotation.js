// https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function (tokens) {
	const stack = [];

	const operators = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => Math.trunc(a / b),
	};

	for (t of tokens) {
		const isOperator = t in operators;

		if (isOperator) {
			const [v1, v2] = [stack.pop(), stack.pop()];
			const sum = operators[t](Number(v2), Number(v1));
			stack.push(sum);
			continue;
		}

		stack.push(t);
	}

	return stack.pop();
};
