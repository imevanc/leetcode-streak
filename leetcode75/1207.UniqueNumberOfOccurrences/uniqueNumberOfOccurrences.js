/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hashOccurences = {};
    for (let i=0; i<=arr.length-1; i++){
        if (hashOccurences[arr[i]]){
            hashOccurences[arr[i]] += 1;
        } else {
            hashOccurences[arr[i]] = 1;
        }
    }
    let occur = Object.values(hashOccurences);
    return Array.from(new Set(occur)).length === occur.length
};
