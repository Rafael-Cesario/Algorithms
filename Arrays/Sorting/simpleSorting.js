// Simple sorting Algorithm
// O (n log n)

const sortArray = (array) => {
	const swap = (a, b) => {
		const temp = array[a];
		array[a] = array[b];
		array[b] = temp;
	};

	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[i]) swap(i, j);
		}
	}

	return array;
};

const a = Array(20)
	.fill()
	.map(() => Math.floor(Math.random() * 21));

console.log({ unsorted: a });

const result = sortArray(a);
console.log({ result });
