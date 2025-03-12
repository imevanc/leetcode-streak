/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let a = -1, b = -1, c = -1;
    let counter = 0;
    for (let i=0; i<=s.length-1; i++){
        if (s[i] === "a") a = i;
        else if (s[i] === "b") b = i;
        else if (s[i] === "c") c = i;
        counter += Math.min(a, b, c) + 1;
    }
    return counter;
};
