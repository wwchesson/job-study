import {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
  } from '@datastructures-js/priority-queue';



//priority queue - same as a normal queue except the elements are given a relative priority (elements have to be comparable)
//when to use:
    //need to dynamically retrieve the highest/lowest element
    //used in a lot of graph algorithms (Dijkstra's shortest path algo)
    //anytime you have an algo when you want to continuously move the next best node/element
    
//O(n log n) to either build priority queue or removing from it

//Leetcode 1167 || Lintcode 1872


//start with pq and put all sticks in it
//take the two shortest sticks at any time
//add those two sticks and the cost to the total and put it back in the pq
//continue until there's only one stick
var connectSticks = function(sticks) {
    let pq = new MinPriorityQueue()

    for(let i = 0; i < sticks.length; i++) {
        //pq data structure takes care of sorting
        pq.enqueue(sticks[i])
    }

    //loop thru priority queue and remove first two elements each time
    let output = 0;
    while(pq.size() > 1) {
        let firstStick = pq.dequeue()
        let secondStick = pq.dequeue()
        let newStick = firstStick + secondStick

        //add cost to output
        output += newStick
        //add new stick back to pq
        pq.enqueue(newStick)
    }

    return output
}

console.log(connectSticks([2, 4, 3]))

//Leetcode 973