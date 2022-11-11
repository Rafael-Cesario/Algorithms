// Given a text txt[] and a pattern pat[], write a recursive function “contains(char pat[], char txt[])” that returns true if pat[] is present in txt[], otherwise false.

// Time O(n * m);
// Space O(n + m);

const subStringSearch = (string, pattern, stringIndex, patternIndex) => {
	const isSubstring = (string, pattern, stringIndex, patternIndex) => {
		if (string.length === stringIndex && pattern !== pattern.length) return false;
		if (pattern.length === patternIndex) return true;

		if (string[stringIndex] === pattern[patternIndex]) {
			return isSubstring(string, pattern, stringIndex + 1, patternIndex + 1);
		}

		return false;
	};

	if (string.length === stringIndex) return true;

	if (
		string[stringIndex] === pattern[patternIndex] &&
		isSubstring(string, pattern, stringIndex, patternIndex)
	)
		return true;

	return subStringSearch(string, pattern, stringIndex + 1, patternIndex);
};

const string = 'This is a test';
const pattern = 'test';
const result = subStringSearch(string, pattern, 0, 0);

console.log({ string, pattern, result });
