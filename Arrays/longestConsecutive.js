// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {

    const set = new Set(nums);
    let totalLength = 0;

    for (number of nums) {
        const previousValue = set.has(number - 1)
        if (previousValue) continue;

        let length = 1;
        let current = number;

        while (set.has(current + 1)) {
            length++
            current++
        }

        if (length > totalLength) totalLength = length;
    }

    return totalLength;
};