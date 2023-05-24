// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

const wordPattern = (pattern, s) => {
	const map = {};
	const words = s.split(' ');

	if (pattern.lenght !== words.length) return false;

	for (let index in pattern) {
		const letter = pattern[index];
		const word = words[index];

		if (letter in map && map[letter] !== word) return false;
		if (word in map && map[word] !== letter) return false;

		map[letter] = word;
		map[word] = letter;
	}

	return true;
};

console.log(wordPattern('abba', 'dog cat cat dog')); // => true
console.log(wordPattern('abba', 'dog cat cat fish')); // => false
console.log(wordPattern('aaaa', 'dog cat cat dog')); // => false
