import {
    MinHeap,
  } from '@datastructures-js/heap';

 //put all words in hashMap and count their frequency
 //place their frequency and the word itself in the minHeap - k times
//place new values in minHeap if the frequency of the words leftover are greater than what's already in there
//put the top K elements in the result

var topKFrequent = function(words, k) {
    const res = []
    const wordCount = {}
    const minHeap = new MinHeap()

    for(let word of words) {
        if(wordCount[word]) wordCount[word]++
        else wordCount[word] = 1
    }

    const wordKeys = Object.keys(wordCount)

    for(let i = 0; i < k; i++) {
        let wordInCount = wordKeys[i]
        minHeap.insert([wordCount[wordInCount], wordInCount])
    }

    for(let i = k; i < words.length; i++) {
        let wordInCount = wordKeys[i]
        if(wordCount[wordInCount] > minHeap.root()) {
            minHeap.extractRoot()
            minHeap.insert([wordCount[wordInCount], wordInCount])
        }
    }

    for(let i = 0; i < k; i++){
        let resWord = minHeap.pop()
        res.push(resWord[1])
    }

    return res
};

console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2))