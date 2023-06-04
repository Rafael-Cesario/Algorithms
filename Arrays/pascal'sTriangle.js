const generate = (numRows) => {
	const rows = [[1]];

	for (let i = 0; i < numRows - 1; i++) {
		const temp = [...rows[i]];
		temp.push(0);
		temp.unshift(0);

		const newRow = [];

		for (let j = 0; j < temp.length - 1; j++) {
			const v1 = temp[j];
			const v2 = temp[j + 1];
			newRow.push(v1 + v2);
		}

		rows.push(newRow);
	}

	return rows;
};
