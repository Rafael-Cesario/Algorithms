var threeSum = function (nums) {
	const sortedNums = nums.sort((a, b) => a - b);
	const sums = [];

	for (number in sortedNums) {
		const current = sortedNums[number];
		const previous = sortedNums[number - 1];

		if (current === previous) continue;

		let left = Number(number) + 1;
		let right = sortedNums.length - 1;

		while (left < right) {
			const sum = current + sortedNums[left] + sortedNums[right];

			if (sum > 0) right--;
			if (sum < 0) left++;

			if (sum === 0) {
				sums.push([current, sortedNums[left], sortedNums[right]]);

				left++;
				while (sortedNums[left] === sortedNums[left - 1] && left < right) {
					left++;
				}
			}
		}
	}

	return sums;
};
