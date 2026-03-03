/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    
    let step1 = 1; 
    let step2 = 2; 
    
    for (let i = 3; i <= n; i++) {
        let temp = step1 + step2;
        step1 = step2;
        step2 = temp;
    }
    
    return step2;
};