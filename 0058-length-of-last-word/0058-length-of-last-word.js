/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(str) {
let length = str.trim().split(" ").pop().length;

console.log(length);
return length
};
lengthOfLastWord("Hello World")