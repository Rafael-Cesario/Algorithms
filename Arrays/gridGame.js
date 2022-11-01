// You are given a 0-indexed 2D array grid of size 2 x n, where grid[r][c] represents the number of points at position (r, c) on the matrix. Two robots are playing a game on this matrix.

// Both robots initially start at (0, 0) and want to reach (1, n-1). Each robot may only move to the right ((r, c) to (r, c + 1)) or down ((r, c) to (r + 1, c)).

// At the start of the game, the first robot moves from (0, 0) to (1, n-1), collecting all the points from the cells on its path. For all cells (r, c) traversed on the path, grid[r][c] is set to 0. Then, the second robot moves from (0, 0) to (1, n-1), collecting the points on its path. Note that their paths may intersect with one another.

// The first robot wants to minimize the number of points collected by the second robot. In contrast, the second robot wants to maximize the number of points it collects. If both robots play optimally, return the number of points collected by the second robot.

// Input: grid = [[2,5,4],[1,5,1]]
// Output: 4

const gridGame = (grid) => {
	const preRow1 = [...grid[0]];
	const preRow2 = [...grid[1]];

	let i = 1;
	while (i < grid[0].length) {
		preRow1[i] += preRow1[i - 1];
		preRow2[i] += preRow2[i - 1];
		i++;
	}

	let res = Infinity;

	for (let i in grid[0]) {
		let top = preRow1[preRow1.length - 1] - preRow1[i];
		let bottom = i > 0 ? preRow2[Number(i) - 1] : 0;
		let secondRobot = Math.max(top, bottom);
		res = Math.min(res, secondRobot);
	}

	return res;
};

console.log(
	gridGame([
		[2, 5, 4],
		[1, 5, 1],
	])
);
