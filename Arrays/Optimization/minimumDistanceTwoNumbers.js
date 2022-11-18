// Given an unsorted array arr[] and two numbers x and y, find the minimum distance between x and y in arr[]. The array might also contain duplicates. You may assume that both x and y are different and present in arr[].

const minDistance = (array, x, y) => {
	let distance = Infinity;
	let i = 0;
	let j = -1;

	for (i; i < array.length; i++) {
		if (array[i] === x || array[i] === y) {
			if (j !== -1 && array[i] !== array[j]) {
				const newDistance = Math.abs(i - j);
				if (newDistance < distance) distance = newDistance;
			}

			j = i;
		}
	}

	return distance;
};

const array = [3, 5, 4, 2, 6, 0, 3, 0, 5, 4, 8, 3];
const [x, y] = [3, 6];
const result = minDistance(array, x, y);

console.log({ result });
