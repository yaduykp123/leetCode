/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    
row =   0;
col =   0

for(let cmd of commands){
    (cmd === "DOWN")&& row++
    (cmd === "UP")&& row--
    (cmd === "LEFT") && col --
    (cmd === "RIGHT")&& col++
}
return row*n + col
};