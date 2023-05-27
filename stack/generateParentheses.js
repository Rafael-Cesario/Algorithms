// https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function (n) {
	const stack = [];
	const res = [];

	const addParenthesis = (open, close) => {
		if (open === close && open === n) {
			res.push(stack.join(""));
			return;
		}

		if (open < n) {
			stack.push("(");
			addParenthesis(open + 1, close);
			stack.pop();
		}

		if (close < open) {
			stack.push(")");
			addParenthesis(open, close + 1);
			stack.pop();
		}
	};

	addParenthesis(0, 0);
	return res;
};
