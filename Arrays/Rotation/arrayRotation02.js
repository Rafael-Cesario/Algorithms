// Given an array arr[] of size N, the task is to rotate the array by d position to the left.

// Time = O(n);
// Space = O(1);

const reverseArray = (array, start, end) => {
	while (start < end) {
		const temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		start++, end--;
	}
};

const leftRotate = (array, rotateTimes) => {
	if (rotateTimes === 0) return;

	rotateTimes = rotateTimes % array.length;

	reverseArray(array, 0, rotateTimes - 1);
	reverseArray(array, rotateTimes, array.length - 1);
	reverseArray(array, 0, array.length - 1);

	return array;
};

const array = Array(10)
	.fill()
	.map(() => Math.floor(Math.random() * 11));
console.log({ array });

const rotateTimes = Math.floor(Math.random() * 10);
console.log({ rotateTimes });

const result = leftRotate(array, rotateTimes);
console.log({ result });
