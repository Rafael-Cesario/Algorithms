// Design a class to encode a URL and decode a tiny URL.
// Implement the Solution class:

// Solution() Initializes the object of the system.
// String encode(String longUrl) Returns a tiny URL for the given longUrl.
// String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.

// Example 1:

// Input: url = "https://leetcode.com/problems/design-tinyurl"
// Output: "https://leetcode.com/problems/design-tinyurl"

// Explanation:
// Solution obj = new Solution();
// string tiny = obj.encode(url); // returns the encoded tiny url.
// string ans = obj.decode(tiny); // returns the original url after deconding it.

class Codec {
	encodeMap = {};
	decodeMap = {};
	base = 'http://tinyurl.com/';

	encode(longUrl) {
		if (!(longUrl in this.encode)) {
			const shortUrl = this.base + String(Object.keys(this.encodeMap).length + 1);
			this.encodeMap[longUrl] = shortUrl;
			this.decodeMap[shortUrl] = longUrl;
		}

		return this.encodeMap[longUrl];
	}

	decode(shortUrl) {
		return this.decodeMap[shortUrl];
	}
}

const codec = new Codec();
const encoded = codec.encode('https://leetcode.com/problems/design-tinyurl');
const decoded = codec.decode(encoded);
console.log({ encoded, decoded });
