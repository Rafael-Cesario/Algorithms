// Given an array, the task is to reverse it.

// time = O(N);
// space = O(1);

const reverse = (array) => {
	let l = 0;
	let r = array.length - 1;

	while (l < r) {
		[array[l], array[r]] = [array[r], array[l]];
		l++, r--;
	}

	return array;
};

const array = Array(10)
	.fill()
	.map(() => Math.floor(Math.random() * 11))
	.sort((a, b) => a - b);
console.log({ array });

const result = reverse(array);
console.log({ result });
