// Given an array of elements of length N, ranging from 0 to N – 1. All elements may not be present in the array. If the element is not present then there will be -1 present in the array. Rearrange the array such that A[i] = i and if i is not present, display -1 at that place.

// Time = O(N):
// Space = O(N);

const rearrange = (array) => {
	const dummy = Array(array.length).fill(-1);

	for (let number of array) {
		if (number > -1) dummy[number] = number;
	}

	return dummy;
};

const result = rearrange([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]);
console.log({ result });
