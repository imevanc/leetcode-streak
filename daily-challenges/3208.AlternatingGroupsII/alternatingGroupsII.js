/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    let counter = 0;
    let valid = 1;
    const len = colors.length;
    for(let i=1; i<len+k-1; i++){
        let currIdx = i%len;
        let prevIdx = (i-1)%len;
        if (colors[prevIdx] !== colors[currIdx]){
            valid++;
        }else{
            valid=1;
        }
        if(valid >= k){
            counter++;
        }
    }
    return counter;
};
