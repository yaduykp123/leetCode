/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    const val = num.toString().split("")
    let count = 0
for(i=0; i<val.length; i++){
    if(num % Number(val[i]) === 0){
     count ++
    }
}
   return count
};