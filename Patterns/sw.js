//SLIDING WINDOW PATTERN
//applying a window to an array or string which expands or minimizes the window depending on the criteria
//use to find a max, min, or subset of array
//always moves left to right
//typically stick with for loop

//initial case: find maxSum within window given size of k
//1. always identify the edge cases! if array.length < k
//2. make 2 variables: maxSum, tempSum
//3. calculate the initial window
//for (let i = 0; i < k; i++) {maxSum += arr[i]}
//4. tempSum = maxSum
//5. sliding window effect for (let i = k; i < arr.length; i++)
//tempSum = max + arr[k] - arr[i - k]

const arr1 = [2, 3, 4, 15, 4, 20];

const maxSubarray = (arr, k) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < k) return null;

  //calculate the initial window sum
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
    console.log("this is maxSum", maxSum)
  }

  //set up tempSum to start at same value as maxSum
  tempSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - k];
    console.log("this is tempSum", tempSum)
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubarray(arr1, 3));
