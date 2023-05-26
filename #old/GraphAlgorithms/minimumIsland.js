// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.
// You may assume that the grid contains at least one island.

const minimumIsland = (grid) => {
	const visited = new Set();
	let smallest = Infinity;

	for (let row = 0; row < grid.length; row++) {
		for (let column = 0; column < grid[0].length; column++) {
			const size = explore(grid, row, column, visited);

			if (size < smallest && size > 0) smallest = size;
		}
	}

	return smallest;
};

const explore = (grid, row, column, visited) => {
	const rowBounds = 0 <= row && row < grid.length;
	const columnBounds = 0 <= column && column < grid[0].length;

	if (!rowBounds || !columnBounds) return 0;

	if (grid[row][column] === 'W') return 0;

	const position = `${row}, ${column}`;
	if (visited.has(position)) return 0;

	visited.add(position);

	let size = 1;

	size += explore(grid, row - 1, column, visited);
	size += explore(grid, row + 1, column, visited);
	size += explore(grid, row, column - 1, visited);
	size += explore(grid, row, column + 1, visited);

	return size;
};

const grid = [
	['W', 'L', 'W', 'W', 'W'],
	['W', 'L', 'W', 'W', 'W'],
	['W', 'W', 'W', 'L', 'W'],
	['W', 'W', 'L', 'L', 'W'],
	['L', 'W', 'W', 'L', 'L'],
	['L', 'L', 'W', 'W', 'W'],
];

const result = minimumIsland(grid); // -> 2
console.log({ result });
