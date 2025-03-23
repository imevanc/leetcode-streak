/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0){
        return false;
    }
    const xx = x.toString();
    let left = 0;
    let right = xx.length - 1;
    while(left <= right){
        if(xx[left] !== xx[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};
