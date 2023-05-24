// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

const searchMatrix = (matrix, target) => {
	let top = 0;
	let bot = matrix.length - 1;

	while (top <= bot) {
		const mid = Math.ceil((top + bot) / 2);

		if (target < matrix[mid][0]) bot = mid - 1;
		else if (target > matrix[mid][matrix[mid].length - 1]) top = mid + 1;
		else break;
	}

	if (!top <= bot) return false;

	let l = 0;
	let r = matrix[0].length - 1;

	while (l <= r) {
		const i = Math.ceil((top + bot) / 2);
		const j = Math.ceil((l + r) / 2);
		const current = matrix[i][j];

		if (target === current) return true;

		if (target > current) l = j + 1;
		else if (target < current) r = j - 1;
		else break;
	}

	return false;
};

console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		3
	)
);
