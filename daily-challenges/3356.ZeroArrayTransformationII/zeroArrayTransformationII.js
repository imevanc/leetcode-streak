/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
const canMakeZeroArray = (nums, queries, limit) => {
    let n = nums.length;
    let delta = new Array(n + 1).fill(0);

    for (let i = 0; i < limit; i++) {
        let [start, end, value] = queries[i];
        delta[start] -= value;
        if (end + 1 < n) delta[end + 1] += value;
    }

    let sum = 0, cumulativeDecrease = 0;
    for (let i = 0; i < n; i++) {
        cumulativeDecrease += delta[i];
        if (nums[i] + cumulativeDecrease > 0) sum += nums[i];
    }

    return sum === 0;
};

const minZeroArray = (nums, queries) => {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    if (totalSum === 0) return 0;

    let left = 1, right = queries.length, result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canMakeZeroArray(nums, queries, mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};
