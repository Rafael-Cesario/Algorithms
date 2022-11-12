// Given an array of integers arr[] of size N and an integer, the task is to rotate the array elements to the left by d positions.

// Time = O(N);
// Space = O(D);

const rotateArray = (array, rotateTimes) => {
	const temp = [];
	let count = 0;

	while (count < rotateTimes) {
		temp.push(array.shift());
		count++;
	}

	return [...array, ...temp];
};

const array = Array(10)
	.fill()
	.map(() => Math.floor(Math.random() * 11));
console.log({ array });

const rotateTimes = Math.floor(Math.random() * 10);
console.log({ rotateTimes });

const result = rotateArray(array, rotateTimes);
console.log({ result });
