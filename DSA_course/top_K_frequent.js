import {
    MinHeap,
  } from '@datastructures-js/heap';

var topKFrequent = function(nums, k) {
    const res = []
    const numCount = {}
    const minHeap = new MinHeap()

    for (let n of nums) {
        if(numCount[n]) numCount[n]++
        else numCount[n] = 1
    }

    const values = Object.keys(numCount)

    for(let i = 0; i < k; i++) {
        let value = values[i]
        //[count, value]
        minHeap.insert([numCount[value], value])
        console.log("minHeap", minHeap._heap._nodes)
    }

    //having these 2 different loops decreases the number of operations. If added all the elements to the minHeap, then removed until minHeap.size() === k, would be more operations and worse time complexity
    for(let i = k; i < values.length; i++) {
        let value = values[i]
        if(numCount[value] > minHeap.root()) {
            minHeap.extractRoot()
            minHeap.insert([numCount[value], value])
        }
    }

    for(let i = 0; i < k; i++) {
        let num = minHeap.pop()
        res.push(num[1])
    }

    return res
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))