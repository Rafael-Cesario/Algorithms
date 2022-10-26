// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

const isValidSudoku = (board) => {
	const columns = {};
	const rows = {};
	const box = {};

	let r = 0;
	while (r < 9) {
		let c = 0;
		while (c < 9) {
			const current = board[r][c];
			const b = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

			if (!(c in columns)) columns[c] = new Set();
			if (!(r in rows)) rows[r] = new Set();
			if (!(b in box)) box[b] = new Set();

			if (current !== '.') {
				if (columns[c].has(current)) return false;
				if (rows[r].has(current)) return false;
				if (box[b].has(current)) return false;

				columns[c].add(current);
				rows[r].add(current);
				box[b].add(current);
			}

			c++;
		}
		r++;
	}

	return true;
};

// => true;
console.log(
	isValidSudoku([
		['5', '3', '.', '.', '7', '.', '.', '.', '.'],
		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
	])
);
