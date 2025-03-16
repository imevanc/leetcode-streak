/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let left = 1; 
    let right = Math.min(...ranks) * cars * cars;
    let answer = right;
    while (left <= right){
        let mid = Math.floor((left+right)/2);
        let totalCars = 0;
        for (let rank of ranks) {
            totalCars += Math.floor(Math.sqrt(mid / rank));
        }
        if(totalCars >= cars){
            answer = mid;
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return answer;
};
