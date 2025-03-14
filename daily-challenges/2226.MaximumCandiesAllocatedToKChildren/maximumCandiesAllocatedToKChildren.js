/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    if (!candies.length || k === 0) return 0;
    const totalCandies = candies.reduce((sum, pile) => sum + pile, 0);
    if (totalCandies < k) return 0;
    
    let left = 1;
    let right = Math.floor(totalCandies / k);
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const childrenServed = candies.reduce((count, pile) => count + Math.floor(pile / mid), 0);
        if (childrenServed >= k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};
