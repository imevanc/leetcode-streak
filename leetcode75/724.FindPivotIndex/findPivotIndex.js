/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = 0;
    let right = nums.reduce((a, b) => a+b, 0);    
    let pointer = 0;
    while(pointer < nums.length){
        right -= nums[pointer];
        if(left === right){
            return pointer;
        }
        left += nums[pointer++];
    }
    return -1;
};
