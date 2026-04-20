/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
           let Sent  = []  
      for(i=0; i<=sentences.length-1;i++){
        Sent.push(sentences[i].split(" ").length)
      }
      Sent.sort((a,b) =>b-a) 
           return Sent[0]
};