//Use recursion to save on space complexity. Not instantiate any variables. For/while loops use
//additional memory to keep track of values.

//Two essential parts to recursions
//Base case & recurive path
//Act as if the function is already written for you.

const someFunction = (num) => {
  if (num === 8) return num;
  someFunction(num + 1);
};
//constant space complexity -- find example where recursion saves on space complexity
//linear time complexity bc needs to take n steps to complete function. Time complexity is bound by
//numbers of times that calling the function.
//Space complexity is measured by the MAX number of function on the call stack.

////Count Down From Five////
function countDownFromFive(num) {
  if (num === 0) return;
  console.log(num);
  countDownFromFive(num - 1);
}

///Binary Iterative Search///
//why are some searchs O(n log n)?

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const binaryIterativeSearch = (nums, target) => {
  if (!nums.length) return -1;

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middleIndex = Math.floor((start + end) / 2);

    if (nums[middleIndex] === target) {
      return middleIndex;
    } else if (nums[middleIndex] < target) {
      start = middleIndex + 1;
    } else {
      end = middleIndex - 1;
    }
  }
  return -1;
};

//recursive approach//
//set up default parameters
const binaryRecursiveSearch = (nums, target, start = 0, end = nums.length - 1) => {
    //can't initialize values inside the function because they're always reset to that value when call the function recursively
    //1st base case
    if( start > end ) return -1
    //2nd base case
    let middleIndex = Math.floor((start + end) / 2)
    if(nums[middleIndex] === target) return middleIndex;

    if(nums[middleIndex] > target) {
        return binaryRecursiveSearch(nums, target, start, middleIndex - 1)
        //start will be default value, the fourth argument replaces default end argument
    } else {
        return binaryRecursiveSearch(nums, target, middleIndex + 1, end)
    }

}