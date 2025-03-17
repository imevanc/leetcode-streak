/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const occ = nums.reduce((refObj, el) => {
        if (refObj[el]){
            refObj[el] += 1;
        }else{
            refObj[el] = 1;
        }
        return refObj;
    },{});
    
    const val = Object.values(occ);
    for (let i=0; i<=val.length-1; i++){
        if(val[i]%2!==0){
            return false;
        }
    }
    return true;
};
