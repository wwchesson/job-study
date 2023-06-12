//push any interval into result array whose end times is less than start of new interval
//if end time of any interval is less than the end time of the current interval, merge them
//stop when the end time of current interval is greater than the end time of the new interval



var insert = function(intervals, newInterval) {
    const res = [];
    let i = 0;
    let n = intervals.length
    let startInterval = newInterval[0]
    let endInterval = newInterval[1]

    //skip all intervals that end before newInterval starts
    while(i < n && intervals[i][1] < startInterval) res.push(intervals[i++])

    //merge intervals until reach end or the interval starts after the newInterval ends
    while(i < n && intervals[i][0] <= endInterval) {
        startInterval = Math.min(startInterval, intervals[i][0])
        endInterval = Math.max(endInterval, intervals[i][1])
        i++
    }

    //finished merging, add merged interval to result
    res.push([startInterval, endInterval])

    while(i < n) res.push(intervals[i++])


    return res;

};