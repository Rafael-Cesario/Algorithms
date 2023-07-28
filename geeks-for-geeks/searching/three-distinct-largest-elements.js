// Problem link https://www.geeksforgeeks.org/find-the-largest-three-elements-in-an-array/

const threeDistinctLargestElements = (nums) => {
	const threeMax = [];

	for (const number of nums) {
		let current = number;

		if (threeMax.length < 3) {
			threeMax.push(current);
			continue;
		}

		for (const index in threeMax) {
			if (current > threeMax[index]) {
				[current, threeMax[index]] = [threeMax[index], current];
			}
		}
	}

	return threeMax;
};

let input = [10, 4, 3, 50, 23, 90];
let output = threeDistinctLargestElements(input);
console.log({ output });
// expect 90, 50, 23

input = [ 12, 13, 1, 10, 34, 1 ]
output = threeDistinctLargestElements(input);
console.log({ output });
// expect 34, 13, 12
