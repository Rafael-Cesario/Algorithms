// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

const islandCount = (grid) => {
	const visited = new Set();
	let count = 0;

	for (let row = 0; row < grid.length; row++) {
		for (let column = 0; column < grid[0].length; column++) {
			const isNewIsland = explore(grid, row, column, visited);

			if (isNewIsland) count++;
		}
	}

	return count;
};

const explore = (grid, row, column, visited) => {
	const rowBounds = 0 <= row && row < grid.length;
	const columnBounds = 0 <= column && column < grid[0].length;
	if (!rowBounds || !columnBounds) return false;

	if (grid[row][column] === 'W') return false;

	const position = `${row}, ${column}`;
	if (visited.has(position)) return false;

	visited.add(position);

	explore(grid, row - 1, column, visited);
	explore(grid, row + 1, column, visited);
	explore(grid, row, column - 1, visited);
	explore(grid, row, column + 1, visited);

	return true;
};

const grid = [
	['W', 'L', 'W', 'W', 'W'],
	['W', 'L', 'W', 'W', 'W'],
	['W', 'W', 'W', 'L', 'W'],
	['W', 'W', 'L', 'L', 'W'],
	['L', 'W', 'W', 'L', 'L'],
	['L', 'L', 'W', 'W', 'W'],
];

const result = islandCount(grid); // -> 3
console.log({ result });
