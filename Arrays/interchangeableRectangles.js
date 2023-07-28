// You are given n rectangles represented by a 0-indexed 2D integer array rectangles, where rectangles[i] = [widthi, heighti] denotes the width and height of the ith rectangle.

// Two rectangles i and j (i < j) are considered interchangeable if they have the same width-to-height ratio. More formally, two rectangles are interchangeable if widthi/heighti == widthj/heightj (using decimal division, not integer division).

// Return the number of pairs of interchangeable rectangles in rectangles.

const interchangeableRectangles = (rectangles) => {
	const count = {};

	for (let [w, h] of rectangles) {
		count[w / h] = 1 + (count[w / h] ?? 0);
	}

	res = 0;
	for (let value of Object.values(count)) {
		if (value > 1) res += Math.floor((value * (value - 1)) / 2);
	}

	return res;
};

// Output: 6
console.log(
	interchangeableRectangles([
		[4, 8],
		[3, 6],
		[10, 20],
		[15, 30],
	])
);
