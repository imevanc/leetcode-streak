/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 1;
    let right = 1;
    while(left<nums.length){
        if(nums[left]!==nums[left-1]){
            nums[right] = nums[left];
            right++;
        }
        left++;
    }
    return right;
};
