// Given an array of random numbers, Push all the zero’s of a given array to the end of the array.

// Time = O(N);
// Space = O(1);
const moveZeroes = (array) => {
	let ZeroIndex = 0;

	for (let index in array) {
		if (array[index] > 0) {
			[array[index], array[ZeroIndex]] = [array[ZeroIndex], array[index]];
			ZeroIndex++;
		}
	}

	return array;
};

const array = [1, 2, 0, 0, 0, 3, 6];
const result = moveZeroes(array);
console.log({ result });
