// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// const majorityElement = (array) => {
// 	const count = {};
// 	let result = null;

// 	for (let num of array) {
// 		if (!(num in count)) count[num] = 0;
// 		count[num] += 1;
// 	}

// 	for (let [key, value] of Object.entries(count)) {
// 		if (value > count[result] || !result) result = key;
// 	}

// 	return result;
// };

const majorityElement = (array) => {
	let count = 0;
	let res = 0;

	for (let num of array) {
		if (count === 0) res = num;
		count += res === num ? 1 : -1;
	}

	return res;
};

console.log(majorityElement([3, 2, 3])); // => 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // => 2
