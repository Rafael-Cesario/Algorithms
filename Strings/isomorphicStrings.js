// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

const isomorphic = (s, t) => {
	const mapS = {};
	const mapT = {};

	for (let letter in s) {
		if (s[letter] in mapS && mapS[s[letter]] !== t[letter]) return false;
		if (t[letter] in mapT && mapT[t[letter]] !== s[letter]) return false;

		mapS[s[letter]] = t[letter];
		mapT[t[letter]] = s[letter];
	}

	return true;
};

console.log(isomorphic('egg', 'add')); // true
console.log(isomorphic('foo', 'bar')); // false
console.log(isomorphic('paper', 'title')); // true
