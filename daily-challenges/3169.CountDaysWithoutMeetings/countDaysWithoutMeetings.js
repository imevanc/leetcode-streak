/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    let occupiedDays = 0;
    let lastEnd = 0;    
    for (const [start, end] of meetings) {
        occupiedDays += Math.max(0, Math.min(end, days) - Math.max(start, lastEnd + 1) + 1);
        
        lastEnd = Math.max(lastEnd, end);
    }
    return days - occupiedDays;
};
