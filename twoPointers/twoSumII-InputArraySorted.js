var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum > target) right--;
        if (sum < target) left++;
        if (sum === target) return [left + 1, right + 1]
    }
};