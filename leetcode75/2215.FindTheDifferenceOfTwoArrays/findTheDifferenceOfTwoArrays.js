/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const h1 = new Set(nums1);
    const h2 = new Set(nums2);

    for (let num of nums2) {
        if (h1.has(num)) {
            h1.delete(num);
            h2.delete(num);
        }
    }

    return [Array.from(h1), Array.from(h2)];
};
