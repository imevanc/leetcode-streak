/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = -Infinity;
    let accSum = 0;
    let pointer = 0;
    while(pointer !== gain.length){
        if (accSum+gain[pointer]>highest){
            highest = accSum+gain[pointer];
        }
        accSum += gain[pointer++];
    }
    return highest < 0 ? 0 : highest;
};
