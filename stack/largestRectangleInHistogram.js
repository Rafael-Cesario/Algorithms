var largestRectangleArea = function (heights) {
	let maxArea = 0;
	const stack = [];

	for (i in heights) {
		let startIndex = i;

		while (stack.length && stack[stack.length - 1][1] > heights[i]) {
			const [index, height] = stack.pop();
			const area = height * (i - index);
			if (area > maxArea) maxArea = area;
			startIndex = index;
		}

		stack.push([startIndex, heights[i]]);
	}

	while (stack.length) {
		const [index, height] = stack.pop();
		const length = heights.length - index;
		const area = height * length;
		if (area > maxArea) maxArea = area;
	}

	return maxArea;
};
