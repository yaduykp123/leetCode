/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    // let str = sentence.toUpperCase()
    // for (let i = 65; i <= 90; i++) {
    //     if (!str.includes(String.fromCharCode(i)))return false
    // }return true 

     
    return  new Set(sentence).size === 26

};