var getConcatenation = function (nums) {
	const answer = [];

	for (i in nums) {
		const number = nums[i];
		answer[i] = number;
		answer[Number(i) + nums.length] = number;
	}

	return answer;
};
