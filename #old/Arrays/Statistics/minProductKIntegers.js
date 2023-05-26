// Given an array of n positive integers. We are required to write a program to print the minimum product of k integers of the given array.

const minProduct = (array, k) => {
	const minValues = [];

	for (let num of array) {
		if (minValues.length < k) minValues.push(num);

		for (let i in minValues) {
			if (minValues[i] > num) {
				minValues.splice(i, 0, num);
				minValues.pop();
				break;
			}
		}
	}

	console.log({ minValues });

	let total = 1;
	for (let num of minValues) total *= num;
	return total;
};

const array = [198, 76, 544, 123, 154, 675];
console.log({ array });

const result = minProduct(array, 2);
console.log({ result });
