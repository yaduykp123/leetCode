/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num>9) {
        sum = num.toString().split("").reduce((acc,val) => acc + Number(val),0)
    num = sum
    } return num
};