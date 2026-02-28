/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let set = new Set();
    let count = 0;

    for (let ch of s) {
        if (set.has(ch)) {
            set.delete(ch);
            count += 2;
        } else {
            set.add(ch);
        }
    }

    return set.size ? count + 1 : count;
};

console.log(longestPalindrome("abb"));  