// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

const maxArea = (height) => {
	let l = 0;
	let r = height.length - 1;
	let max = 0;

	while (l < r) {
		const area = Math.min(height[l], height[r]) * (r - l);
		max = Math.max(max, area);

		if (height[l] < height[r]) l++;
		else r--;
	}

	return max;
};

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
