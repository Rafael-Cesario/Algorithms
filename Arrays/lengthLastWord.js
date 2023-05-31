var lengthOfLastWord = function (s) {
    let count = 0;

    for (let i = s.length - 1; i > -1; i--) {
        if (!s[i].match(/[a-z]/i) && count == 0) continue;
        if (!s[i].match(/[a-z]/i) && count > 0) break;

        count++;
    }

    return count;
};
