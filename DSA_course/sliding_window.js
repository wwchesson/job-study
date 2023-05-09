//use on arrays
///when question has words "continuous", "contiguous", "subarrays"
//a subsequence is ANY sequence of elements contained in array/string

var totalFruit = function(fruits) {
    //total amount of baskets. Avoid hard-coding so that algorithm can be more extensible.

    const K = 2;

    //nullish and empty edge cases
    if(!fruits || !fruits.length) return 0;
    if (fruits.length < K) return fruits.length

    let total = 0;
    let currentWindow = 0;

    let basket = new Map();

    let start = 0;

    for (let end = 0; end < fruits.length; end++) {
        //add fruit to the basket
        basket.set(fruits[end],
            basket.get(fruits[end]) ? basket.get(fruits[end]) + 1 : 1)

        currentWindow++;
        console.log("basket", basket, "currentWindow", currentWindow)

        //if window size exceeds K, shrink window from the left side

        while(basket.size > K) {
            let fruit = fruits[start];
            let decrement = basket.get(fruit) - 1

            //if we reach 0 for that fruit, remove the fruit from the basket
            if (decrement === 0) basket.delete(fruit)
            else basket.set(fruit, decrement);

            //shrink current window and move start
            currentWindow--;
            start++

            console.log("decrement", decrement, "currentWindow inside while loop", currentWindow, "start", start)
        }

        total = Math.max(currentWindow, total)
    }
    return total
}

console.log(totalFruit([0, 1, 6, 6, 4, 4, 6]))