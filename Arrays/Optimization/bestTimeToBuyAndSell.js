// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const bestTimeBuySell = (prices) => {
	let max = 0;

	let buy = 0;
	let sell = 1;

	while (sell < prices.length) {
		const profit = prices[sell] - prices[buy];

		if (prices[sell] < prices[buy]) buy = sell;
		if (profit > max) max = profit;

		sell++;
	}

	return max;
};

console.log(bestTimeBuySell([7, 1, 5, 3, 6, 4])); // => 5
console.log(bestTimeBuySell([7, 6, 4, 3, 1])); // => 0
