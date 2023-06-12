import {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
  } from '@datastructures-js/priority-queue';

var kClosest = function(points, k) {
    let pq = new MinPriorityQueue()

    points.forEach(point => {
        let x = point[0]
        let y = point[1]
        let sqrtOfXY = Math.sqrt(x*x + y*y)

        pq.enqueue(sqrtOfXY)
    })

    console.log("all Sqrt", pq._heap._heap._nodes)

    let kSqrts = []
    while(pq.size() > k) {
        let firstInQueue = pq.dequeue()
        kSqrts.push(firstInQueue)
    }

    console.log("kSqrts", kSqrts)

    let output = []
    for(let i = 0; i < points.length; i++) {
        console.log("i", points[i])
        let a = points[i][0]
        let b = points[i][1]

        let sqrtOfAB = Math.sqrt(a*a + b*b)
        console.log("sqrtOfAB", sqrtOfAB)

        if(sqrtOfAB === kSqrts[0]) {
            output.push(points[i])
            kSqrts.shift()
        }
    }

    return output
};

console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 1))