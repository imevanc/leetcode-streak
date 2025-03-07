/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greatestCandy = [...candies].sort((a,b)=>b-a)[0];
    return candies.map(candy => candy+extraCandies >= greatestCandy);
};
