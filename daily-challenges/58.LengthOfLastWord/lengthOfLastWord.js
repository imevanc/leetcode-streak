/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmedS = s.trim();
    let pointer = trimmedS.length-1;
    let res = "";
    while(pointer >= 0){
        if(trimmedS[pointer] !== " "){
            res += trimmedS[pointer];
        }else{
            break;
        }
        pointer--;
    }
    return res.length;
};
