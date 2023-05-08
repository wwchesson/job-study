//function accepts 2 array. It should return true if every value in the array has it's corresponding value squared in the second array.
//The frequency of values must be the same.

same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) //false
same([1, 2, 1], [4, 4, 1]) //false (frequency must be same)

const sameArrays = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false;

    let fC1 = {};
    let fC2 = {};

    //for loop to update frequency counter objects
    for (let val of arr1) {
        fC1[val] = (fC1 || 0) + 1  //same way as if statements I'm used to for setting up hash map
    }

    for (let val of arr2) {
        fC2[val] = (fC2 || 0) + 1
    }

    //for loop to check if squared value exists in key in second object and to check the frequency
    for (let key in fC1) {
        if(!(key ** 2 in fC2)) return false
        if(fC1[key] !== fC2[key ** 2]) return false;
    }

    return true;
}