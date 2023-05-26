// Given an array A of n positive numbers. The task is to find the first Equilibium Point in the array.

// Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

// Note: Retun the index of Equilibrium point. (1-based index)

const equilibriumPoint = (array) => {
	let leftSum = 0;
	let rightSum = 0;

	for (let number of array) rightSum += number;

	console.log({ rightSum });

	for (let i = 0; i < array.length; i++) {
		const current = array[i];

		rightSum -= current;

		if (rightSum === leftSum) return i + 1;

		leftSum += current;
	}

	return -1;
};

const array = [1, 3, 5, 2, 2];
const result = equilibriumPoint(array);
console.log({ array, result });
