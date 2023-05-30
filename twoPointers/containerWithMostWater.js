var maxArea = function (height) {
	let left = 0;
	let right = height.length - 1;

	let maxSize = 0;

	while (left < right) {
		const length = right - left;
		const minHeight = Math.min(height[left], height[right]);
		const currentArea = length * minHeight;

		if (currentArea > maxSize) maxSize = currentArea;
		height[left] < height[right] ? left++ : right--;
	}

	return maxSize;
};
