// https://leetcode.com/problems/daily-temperatures/

var dailyTemperatures = function (temperatures) {
	const stack = [];
	const answer = new Array(temperatures.length).fill(0);

	for (i in temperatures) {
		const current = temperatures[i];
		let lowestTemp = temperatures[stack[stack.length - 1]];

		while (current > lowestTemp) {
			const daysUntilWarm = i - stack[stack.length - 1];
			answer[stack[stack.length - 1]] = daysUntilWarm;
			stack.pop();
			lowestTemp = temperatures[stack[stack.length - 1]];
		}

		stack.push(i);
	}

	return answer;
};
