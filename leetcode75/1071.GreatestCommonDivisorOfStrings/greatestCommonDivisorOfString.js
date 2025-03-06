/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1){
        return '';
    }
    let minLength = Math.min(str1.length, str2.length);
    while (minLength > 0) {
        if ((str1.length % minLength === 0) && (str2.length % minLength === 0)) {
            return str1.substring(0, minLength);
        }
        minLength--;
    }
};
