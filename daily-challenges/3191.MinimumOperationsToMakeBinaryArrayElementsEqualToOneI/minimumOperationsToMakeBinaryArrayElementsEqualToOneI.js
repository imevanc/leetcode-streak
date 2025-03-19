/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let pointer = 0;
    let operations = 0;
    while((pointer+2) < nums.length){
        if(nums[pointer] === 0){
            nums[pointer] = flipItem(nums[pointer]);
            nums[pointer+1] = flipItem(nums[pointer+1]);
            nums[pointer+2] = flipItem(nums[pointer+2]);
            operations++;
        }
        pointer++;
    }
    return nums.includes(0) ? -1 : operations;
};

const flipItem = (item) => item === 0 ? 1 : 0;
