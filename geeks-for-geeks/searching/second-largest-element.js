// Problem link https://www.geeksforgeeks.org/find-second-largest-element-array

const secondLargest = (nums) => {
	let max = 0;
	let secondMax = 0;

	for (const n of nums) {
		if (n > max) {
			secondMax = max;
			max = n;
		} else if (n > secondMax && n < max) secondMax = n;
	}

	return secondMax;
};

let input = [12, 35, 1, 10, 34, 1];
let output = secondLargest(input);
console.log({ output });
// expect 34

input = [10, 5, 10];
output = secondLargest(input);
console.log({ output });
// expect 5

input = [10, 10, 10];
output = secondLargest(input);
console.log({ output });
// expect 0
