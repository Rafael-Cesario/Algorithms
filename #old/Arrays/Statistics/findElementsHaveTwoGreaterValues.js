// Find all the elements that have at least two greater elements;

const findElements = (array, elements) => {
	const greaterElements = [];
	const result = [];

	for (let num of array) {
		if (greaterElements.length < elements) greaterElements.push(num);

		for (let i = 0; i < greaterElements.length; i++) {
			if (greaterElements[i] < num) {
				greaterElements.splice(i, 0, num);
				greaterElements.pop();
				break;
			}
		}
	}

	for (let num of array) if (num < greaterElements[elements - 1]) result.push(num);

	return result;
};

const array = [2, -6, 3, 5, 1];
const result = findElements(array, 2);
console.log({ result });
