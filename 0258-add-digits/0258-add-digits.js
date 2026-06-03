/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   
    let result
    for(i=1;i<=num;i++){
     num = num.toString().split('').reduce((acc , data) => acc + Number(data),0)

    }
    return result = num
        
};