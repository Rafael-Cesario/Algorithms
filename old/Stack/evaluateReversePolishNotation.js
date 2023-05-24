// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

const evalRPN = (tokens) => {
	const stack = [];

	for (let i = 0; i < tokens.length; i++) {
		switch (tokens[i]) {
			case '+':
				stack.push(stack.pop() + stack.pop());
				break;

			case '-':
				let a = stack.pop();
				let b = stack.pop();
				stack.push(b - a);
				break;

			case '*':
				stack.push(stack.pop() * stack.pop());
				break;

			case '/':
				let aa = stack.pop();
				let bb = stack.pop();
				stack.push(parseInt(bb / aa));
				break;

			default:
				stack.push(Number(tokens[i]));
        break;
		}
	}

	return stack[0];
};

console.log(evalRPN(['2', '1', '+', '3', '*']));
