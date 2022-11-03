// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

const trap = (height) => {
	if (!height) return 0;

	let res = 0;

	let l = 0;
	let r = height.length - 1;
	let leftMax = height[l];
	let rightMax = height[r];

	while (l < r) {
		if (leftMax < rightMax) {
			l++;
			leftMax = Math.max(leftMax, height[l]);
			res += leftMax - height[l];
		} else {
			r--;
			rightMax = Math.max(rightMax, height[r]);
			res += rightMax - height[r];
		}
	}

	return res;
};

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
