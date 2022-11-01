// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => {
	let l = 0;
	for (let i = needle.length; i <= haystack.length; i++) {
		const string = haystack.substring(l, i);
		if (string === needle) return l;
		l++;
	}

	return -1;
};

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('abc', 'c'));
