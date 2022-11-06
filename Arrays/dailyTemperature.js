// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to
// wait after the ith day to get a warmer temperature. If there is no future day
// for which this is possible, keep answer[i] == 0 instead.

const dailyTemperature = (temperatures) => {
	const stack = [];
	const result = Array(temperatures.length).fill(0);

	for (let temp in temperatures) {
		while (temperatures[temp] > temperatures[stack[stack.length - 1]] && stack.length > 0) {
			const last = stack.pop();
			const indexDiff = temp - last;
			result[last] = indexDiff;
		}

		stack.push(temp);
	}

	return result;
};

console.log(dailyTemperature([73, 74, 75, 71, 69, 72, 76, 73]));
