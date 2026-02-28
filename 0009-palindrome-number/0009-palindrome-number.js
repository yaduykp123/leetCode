/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = String(x)
    let b = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let pal = b.split("").reverse().join('')
return x === Number(pal)
};

isPalindrome(121)