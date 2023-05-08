//Ask clarifying questions
//Discuss brute force solution
//Brainstorm - decide on approach
//Pseudocode
//Code it out
//Discuss time and space complexity

//TWO POINTERS
//Variations:
//1) start at either end and working towards each other
//2) in middle and working out
//3) fast and slow

//Leetcode problems 345, 26, 5
//longest palindrome substring: iterate over every letter in string and assume it's the middle of palindrom
//account for if even or odd palindrome
//create function to determine if have palindrome
//odd: outer for loop iterating over string
//even: left pointer = current letter; right pointer = current letter - 1

var validPalindrome = function(s) {
    function isPalindrome(s, left, right) {
        while(left < right) {
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true
    }

    let left = 0
    let right = s.length-1
    while(left < right) {
        if(s[left] !== s[right]) {
            return isPalindrome(left+1, right, s) || isPalindrome(left, right-1, s)
        } else {
            left++;
            right--;
            //if make new string would use extra storage
            //bc return the method isPalindrome, then the validPalidrome would return T or F
        }
    }
    return true
};

console.log(validPalindrome("azbczdfcaaa"))

