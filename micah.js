// [3, 1, 2, 4, 5, 3, 9, 4, 6]
// [3, 4, 5, 7, 1, 2, 3, 4, 5]
//create loop where for each chronological set, add the next chronological element. Find the length of each subarray and return the longest.


  //create hashMap that stores the last element of the subArray, and while looping through the array, if have the previous value, then increase the count for the corresponding key
  //the key is the last value of the longest subArray
  //need to replace the value if subarray is greater than the current count in the object




  const findSubarray = (array) => {
    let lengths = {}

    for(let i = 0; i < array.length; i++) {
      let currentElement = array[i]
      let prevKey = array[i] - 1;

      if(!lengths[currentElement]) {
        if(!lengths[prevKey]) {
          lengths[currentElement] = 1
        } else {
          lengths[currentElement] = lengths[prevKey] + 1
        }
      } else {
        let potentialLongerSequence = lengths[prevKey]+1
        if(potentialLongerSequence > lengths[currentElement]) {
          lengths[currentElement] = potentialLongerSequence
        }
      }

    }
    return Math.max(...Object.values(lengths))
  }

console.log(findSubarray([3, 4, 5, 1, 2, 3, 4, 5]))



