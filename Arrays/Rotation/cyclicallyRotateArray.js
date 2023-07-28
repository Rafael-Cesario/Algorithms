// Given an array, cyclically rotate the array clockwise by one.

// Time = O(n);
// Space = O(1);

const rotate = (array, length) => {
	const lastValue = array[length - 1];

	for (let i = length - 1; i > 0; i--) array[i] = array[i - 1];

	array[0] = lastValue;

	return array;
};

const array = [1, 2, 3, 4, 5];
const length = array.length;
console.log({ array });

const result = rotate(array, length);
console.log({ result });
