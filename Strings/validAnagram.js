// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

// time = o(n^m)
// space = o(m)

// const validAnagram = (word01, word02) => {
// 	const stringArray = word02.split('');

// 	for (let letter of word01) {
// 		for (let index in stringArray) {
// 			if (letter === stringArray[index]) {
// 				stringArray.splice(index, 1);
// 				if (stringArray.length === 0) return true;
// 			}
// 		}
// 	}

// 	return false;
// };

// time = o(n)
// space = o(n + m)
const validAnagram = (word01, word02) => {
	if (word01.length !== word02.length) return false;

	const count01 = {};
	const count02 = {};

	for (let index in word01) {
		if (!(word01[index] in count01)) count01[word01[index]] = 0;
		if (!(word02[index] in count02)) count02[word02[index]] = 0;

		count01[word01[index]] += 1;
		count02[word02[index]] += 1;
	}

	for (let letter in count01) {
		if (!count01[letter]) return false;
		if (!count02[letter]) return false;
		if (count01[letter] !== count02[letter]) return false;
	}

	return true;
};

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
