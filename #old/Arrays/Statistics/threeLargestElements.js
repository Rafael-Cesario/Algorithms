// Find the three largest elements in the array;

const largestElements = (array, elements) => {
	const result = [];

	for (let num of array) {
		if (result.length < elements) result.push(num);

		for (let i = 0; i < result.length; i++) {
			if (result[i] < num) {
				result.splice(i, 0, num);
				result.pop();
                break;
			}
		}
	}

	return result;
};

const array = [10, 4, 3, 50, 23, 90];
const result = largestElements(array, 3);
console.log({ array, result });
