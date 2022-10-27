// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// time = o(n)
// space = o(1)

const replaceElements = (array) => {
	let max = -1;
	let index = array.length - 1;

	while (index >= 0) {
		let newMax = Math.max(array[index], max);
		array[index] = max;
		max = newMax;

		index--;
	}

	return array;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // => [18,6,6,6,1,-1]
console.log(replaceElements([400])); // => [-1]
