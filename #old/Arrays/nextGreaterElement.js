// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

const nextGreaterElement = (x, j) => {
	const result = [];

	for (let number of x) {
		for (let i in j) {
			const current = j[i];
			const next = j[Number(i) + 1];

			if (current === number) result.push(next > number ? next : -1);
		}
	}

	return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // => [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // => [3, -1]
