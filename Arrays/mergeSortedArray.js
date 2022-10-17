// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const mergeArrays = (n1, n2, m, n) => {
	let a = 0;
	let b = 0;

	while (a < n1.length && b < n2.length) {
		const current = n1[a];

		if (n1[a] === 0) n1[a] = n2.shift();

		if (n1[a] > n2[b]) {
			n1[a] = n2[b];
			n2[b] = current;
		}

		a++;
	}

	if (n2.length > 0) n1.push(...n2);

	return n1;
};

console.log(mergeArrays([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3)); // => [1,2,2,3,5,6]
console.log(mergeArrays([1], [], 1, 0)); // => [1]
console.log(mergeArrays([], [1], 0, 1)); // => [1]
