// Write a function 'fib(n)' that takes in a number as an argument.
// The function should return the n-th number of the fibonacci sequence.
// the 0th number of the sequence is 0.
// the 1st number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.

// Time = O(N)
// Space = O(N)

const fib = (n) => {
	const table = Array(n + 1).fill(0);
	table[1] = 1;

	for (let index = 0; index <= n; index++) {
		table[index + 1] += table[index];
		table[index + 2] += table[index];
	}

	return table[n];
};

console.log(fib(6)); // => 8
console.log(fib(7)); // => 13
console.log(fib(8)); // => 21
console.log(fib(50)); // => 12586269025
