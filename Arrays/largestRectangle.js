// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

const largestRectangleArea = (heights) => {
	const stack = [];

	let maxArea = 0;

	for (let i in heights) {
		let start = i;
		while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
			const [index, height] = stack.pop();

			maxArea = Math.max(maxArea, height * (Number(i) - index));
			start = index;
		}

		stack.push([start, heights[i]]);
	}

	for (let [i, h] of stack) {
		maxArea = Math.max(maxArea, h * (heights.length - i));
	}

	return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([0, 9]));
console.log(largestRectangleArea([1, 2, 2]));
