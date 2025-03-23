/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    const first = strs[0];
    const last = strs[strs.length-1];
    let res = "";
    for (let i=0; i<first.length; i++){
        if (first[i] === last[i]){
            res += first[i];
        }else {
            break;
        }
    }
    return res;
};
