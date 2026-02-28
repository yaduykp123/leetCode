/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    pal = s.split('').reverse().join("").trim()
    return s === pal
};

isPalindrome("A man, a plan, a canal: Panama")