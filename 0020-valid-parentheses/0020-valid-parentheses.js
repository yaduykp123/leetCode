/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let array = [];
       for (let i = 0; i < s.length; i++) {
        let bracket = s[i];
        if(bracket === "(") array.push(")");
     else  if(bracket === "{") array.push("}");
     else  if(bracket === "[") array.push("]");
        else{
         if(array.pop() !== bracket)  return false;
        }
     }

     return array.length === 0;
};