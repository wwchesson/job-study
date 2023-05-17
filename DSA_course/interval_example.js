//lintcode 919 === leetcode 253

//store the start and end times in diff arrays
//sort the time in ascending order
//look at next start and end times and compare them
//take out the event that's next
//if event is start event, add meeting room
//if event is end event, subtract meeting room

var minMeetingRooms = function(intervals) {
    let startTimes = []
    let endTimes = []

    for (i = 0; i < intervals.length; i++){
        startTimes[i] = intervals[i][0]
        endTimes[i] = intervals[i][1]
    }

    startTimes = startTimes.sort((a,b) => a-b)
    endTimes = endTimes.sort((a,b) => a-b)

    let maxRooms = 0, currentRooms = 0;
    let startIndex = 0, endIndex = 0;

    while(startIndex < intervals.length) {
        if(startTimes[startIndex] < endTimes[endIndex]) {
            currentRooms++
            startIndex++
        } else {
            currentRooms--
            endIndex++
        }
    maxRooms = Math.max(currentRooms, maxRooms)
    }
    return maxRooms
}