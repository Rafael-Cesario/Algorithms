// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

const maximumBallons = (string) => {
	const balloon = {};
	const text = {};

	let result = string.length;

	for (let l of 'balloon') {
		if (!(l in balloon)) balloon[l] = 0;
		balloon[l] += 1;
	}

	for (let l of string) {
		if (!(l in text)) text[l] = 0;
		text[l] += 1;
	}

	for (let l of string) {
		const divison = Math.floor(text[l] / balloon[l]);
    
		if (result > divison) result = divison;
	}

	return result;
};

console.log(maximumBallons('nlaebolko')); // => 1
console.log(maximumBallons('loonbalxballpoon')); // => 2
console.log(maximumBallons('leetcode')); // => 0
