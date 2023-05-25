// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 // Time O(n * m)
 // Space O(n)

const getCode = (letter) => {
    return letter.charCodeAt(0) - "a".charCodeAt(0);
}

const getKey = (word) => {
    const lettersCount = new Array(26).fill(0);

    for (letter of word) {
        const code = getCode(letter);
        lettersCount[code]++
    }

    return lettersCount.toString()
}

const groupAnagrams = (words) => {
    const group = {}

    for (w of words) {
        const key = getKey(w);
        group[key] ? group[key].push(w) : group[key] = [w]
    }

    return Object.values(group)
};