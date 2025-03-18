/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    const stringOfX = x.toString();
    let left = 0;
    let right = stringOfX.length-1;

    while(left<=right){
        if (stringOfX[left++] !== stringOfX[right--]){
            return false;
        }
    }
    return true;
};
