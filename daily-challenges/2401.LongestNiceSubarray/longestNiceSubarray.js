/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let left = 0;
    let right = 0;
    let bits = 0;
    let max = 0;

    while(right<nums.length){
        while ((bits & nums[right]) !== 0){
            bits ^= nums[left];
            left++;
        }
        bits |= nums[right];
        max = Math.max(max, right-left+1);
        right++;
    }
    return max;
};
