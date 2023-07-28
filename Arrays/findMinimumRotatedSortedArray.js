// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

const findMin = (nums) => {
	let l = 0;
	let r = nums.length - 1;
	let res = nums[l];

	while (l <= r) {
    
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
			break;
		};
    
    const mid = Math.ceil((l + r) / 2);

    res = Math.min(res, nums[mid]);

		if (nums[l] <= nums[mid]) l = mid + 1;
		if (nums[l] >= nums[mid]) r = mid - 1;
	};

  return res;
};

console.log(findMin([3, 4, 5, 1, 2]));
