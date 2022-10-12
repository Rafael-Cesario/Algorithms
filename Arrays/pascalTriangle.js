// Given an integer numRows, return the first numRows of Pascal's triangle.

const pascalTriangle = (numRows) => {
	const rows = [[1]];

	let index = 0;
	while (index < numRows - 1) {
		const newRow = [];

		let indexB = 0;
		while (indexB < rows[index].length) {
			const previous = rows[index][indexB - 1];
			const next = rows[index][indexB + 1];
			const current = rows[index][indexB];

			if (!previous) newRow.push(1);
			if (current && previous) newRow.push(current + previous);
			if (!next) newRow.push(1);

			indexB++;
		}

		rows.push(newRow);
		index++;
	}

	return rows;
};

console.log(pascalTriangle(5));
// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

console.log(pascalTriangle(1));
// => [[1]]
