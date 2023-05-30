var trap = function (height) {
	let answer = 0;

	let left = 0;
	let right = height.length - 1;

	let maxL = height[left];
	let maxR = height[right];

	while (left < right) {
		if (maxL < maxR) {
			left++;
			maxL = Math.max(height[left], maxL);
			answer += maxL - height[left];
		} else {
			right--;
			maxR = Math.max(height[right], maxR);
			answer += maxR - height[right];
		}
	}

	return answer;
};
