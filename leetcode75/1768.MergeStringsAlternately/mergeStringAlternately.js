/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const maxLength = Math.max(word1.length, word2.length);
    let res = "";
    let pointer = 0;
    while(pointer !== maxLength){
        if(pointer < word1.length) res += word1[pointer];
        if(pointer < word2.length) res += word2[pointer];
        pointer++;
    }
    return res;
};
