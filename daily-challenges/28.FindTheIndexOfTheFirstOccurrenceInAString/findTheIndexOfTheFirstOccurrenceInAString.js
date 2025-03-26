/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let left = 0;
    let right = needle.length-1;
    while(right < haystack.length){
        if (haystack.slice(left, right+1) === needle){
            return left;
        }
        right++;
        left++;
    }
    return -1;
};
