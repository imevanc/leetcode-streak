/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length;
    const n2 = n * n;
    const expectedSum = (n2 * (n2 + 1)) / 2;
    const seen = new Set();
    let actualSum = 0;
    let repeatedNumber = -1;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const num = grid[i][j];
            if (seen.has(num)) {
                repeatedNumber = num;
            } else {
                seen.add(num);
            }
            actualSum += num;
        }
    }
  
    const missingNumber = repeatedNumber - (actualSum - expectedSum);
    return [repeatedNumber, missingNumber];
};
