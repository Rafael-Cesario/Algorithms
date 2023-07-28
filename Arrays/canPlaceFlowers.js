// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

const canPlaceFlowers = (flowerBed, n) => {
	let count = 0;

	for (let i in flowerBed) {
		if (flowerBed[i] === 0 && !flowerBed[i - 1] && !flowerBed[i + 1]) {
			flowerBed[i] = 1;
			count++;
		}
	}

	return count === n ? true : false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // => true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // => false
