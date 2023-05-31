var replaceElements = function (arr) {
	let max = -1;

	for (let i = arr.length - 1; i > -1; i--) {
		const current = arr[i];
		arr[i] = max;
		if (max < current) max = current;
	}

	return arr;
};
