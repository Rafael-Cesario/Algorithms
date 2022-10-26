// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const topKfrequent = (nums, k) => {
	const result = [];
	const count = {};
	const max = Array(nums.length + 1)
		.fill()
		.map(() => []);

	for (let num of nums) {
		if (!(num in count)) count[num] = 0;
		count[num] += 1;
	}

	for (let num in count) max[count[num]].push(num);

	while (result.length < k) {
		const last = max.pop();
		if (last.length > 0) result.push(last.pop());
	}

	return result;
};

console.log(topKfrequent([1, 1, 1, 2, 2, 3], 2)); // => [1, 2]
console.log(topKfrequent([1], 1)); // => [1]
