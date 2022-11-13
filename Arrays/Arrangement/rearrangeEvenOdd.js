// Given an array of n elements. Our task is to write a program to rearrange the array such that elements at even positions are greater than all elements before it and elements at odd positions are less than all elements before it.

// TIme = O(n log n);
// space = o(n);

const rearrange = (array) => {
	const result = [];
	let start = 0;
	let end = array.length - 1;

	array.sort((a, b) => a - b);

	for (let i = array.length - 1; i >= 0; i--) {
		const isEven = i % 2 === 0;

		if (isEven) {
			result[i] = array[start];
			start++;
		} else {
			result[i] = array[end];
			end--;
		}
	}

	return result;
};

const array = Array(10)
	.fill()
	.map(() => Math.floor(Math.random() * 11));

const result = rearrange(array);
console.log({ result });
