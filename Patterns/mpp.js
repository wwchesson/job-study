//PROBLEM SOLVING APPROACH
//restate the problem
//share your thought process out-lod
//brute force mentality
//can you illustrate your approach?
//identify edge case
//ask for additional examples or further explanation
//pseudocode

//MPP
//use this pattern when you see an array as a param
//designed to be run in linear time
//used for both sorted and unsorted arrays
//used for finding a pair, area, sum
//only one pointer moves at a time depending on a condition

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const array = [-3, -2, -1, 0, 1, 2];
console.log(sumZero(array));
