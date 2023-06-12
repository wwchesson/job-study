//A heap is a binary tree that has two conditions:
    //The value of each node must be greater than each of its descendents.
    //The tree must be complete: can have no missing nodes, except for the rightmost nodes in the bottom level.
//A heap's last node is the rightmost node in its bottom level.
//For N nodes in a binary tree, the tree is organizard into about log(N) rows
//Use a heap or PQ when want the most frequent or least frequent elements

import {MinHeap} from '@datastructures-js/heap'

function carsHeap(cars) {
    const carsHeap = new MinHeap()
    cars.forEach(car => carsHeap.insert(car))

    const sortedHeap = carsHeap.sort((a,b) => a.price - b.price)

    return sortedHeap
}

console.log(carsHeap([
    { year: 2013, price: 35000 },
    { year: 2010, price: 2000 },

  ]))