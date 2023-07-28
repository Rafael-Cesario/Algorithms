// Given an array of N distinct elements and a number x, arrange array elements according to the absolute difference with x, i. e., an element having minimum difference comes first, and so on.
// Note: If two or more elements are at equal distances arrange them in the same sequence as in the given array.

const sort = (array, x) => {
	const map = new Map();

	for (let i = 0; i < array.length; i++) {
		map.set(array[i], Math.abs(x - array[i]));
	}

	const map02 = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));

	let index = 0;
	for (let [key] of map02.entries()) {
		array[index++] = key;
	}

	return array;
};

const array = [10, 5, 3, 9, 2];
const x = 7;
console.log({ array, x });

const result = sort(array, x);
console.log({ result });
