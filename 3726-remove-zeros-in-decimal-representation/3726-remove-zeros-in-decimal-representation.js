/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    n = n.toString()
if(n.includes('0') ){
  n = n.replaceAll('0', "")
}
  
return Number(n)
};