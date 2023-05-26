// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = (a, b) => {
	if (a.length !== b.length) return false;

	const mapA = {};
	const mapB = {};

	for (let index in a) {
		if (!(a[index] in mapA)) mapA[a[index]] = 0;
		if (!(b[index] in mapB)) mapB[b[index]] = 0;

		mapA[a[index]] += 1;
		mapB[b[index]] += 1;
	}

	for (let letter in mapA) {
		if (!(letter in mapA)) return false;
		if (!(letter in mapB)) return false;
		if (mapA[letter] !== mapB[letter]) return false;
	}

	return true;
};

const groupAnagrams = (array) => {
	const result = [];

	while (array.length > 0) {
		const current = array.pop();
		result.push([current]);

		let i = array.length - 1;

		while (i >= 0) {
			if (isAnagram(current, array[i])) {
				result[result.length - 1].push(array[i]);
				array.splice(i, 1);
			}

			i--;
		}
	}

	return result;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
