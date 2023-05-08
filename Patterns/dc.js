//D&C
//divide arrays into smaller chunks and repeat computation with that subset
//use when working with sorted array
//used to decrease O(n) to O(log n)

const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    //find the new midpt in each iteration which will close in on the target
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6));
