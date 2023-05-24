// Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions m * n ?

// Time = O(mn)
// Space = O(mn)

const gridTraveler = (y, x) => {
	const table = Array(y + 1)
		.fill()
		.map(() => Array(x + 1).fill(0));

	table[1][1] = 1;

	for (let cordY = 0; cordY <= y; cordY++) {
		for (let cordX = 0; cordX <= x; cordX++) {
			const current = table[cordY][cordX];

			if (cordY + 1 <= y) table[cordY + 1][cordX] += current;
			if (cordX + 1 <= x) table[cordY][cordX + 1] += current;
		}
	}

	return table[y][x];
};

console.log(gridTraveler(1, 1)); // => 1
console.log(gridTraveler(2, 3)); // => 3
console.log(gridTraveler(3, 2)); // => 3
console.log(gridTraveler(3, 3)); // => 6
console.log(gridTraveler(18, 18)); // => 2333606220
