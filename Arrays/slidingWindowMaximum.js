// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

const maxSlidingWindow = (nums, k) => {
	const queue = [];
	const res = [];

	let l = 0;
	let r = 0;

	while (r < nums.length) {
		while (queue && nums[queue[queue.length - 1]] < nums[r]) queue.pop();
		queue.push(r);

		if (l > queue[0]) queue.shift();

		if (r + 1 >= k) {
			res.push(nums[queue[0]]);
			l++;
		}

    r++;
	}

  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
