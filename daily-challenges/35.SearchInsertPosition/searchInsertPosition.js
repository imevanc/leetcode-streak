/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let pointer = 0;
    while(pointer < nums.length){
        if(nums[pointer] >= target){
            return pointer
        }
        pointer++;
    }
    return nums.length
};
