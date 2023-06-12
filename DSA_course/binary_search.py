"""
divide and conquer: splits the search space into two halves
keep the half that probably has the search target and throw away the other half
run time O(log n)
"""

"""
Binary Search Template
def binary_search(array) -> int:
    def condition(value) -> bool:
        pass

    left, right = min(search_space), max(search_space) #could be [0,n], [1, n] depending on the problem
    while left < right:
        mid = left + (right - left) // 2
        if condition(mid):
            right = mid
        else:
            left = mid + 1

    return left (or right)

"""

"""
Challenges
How do I identify that I can use binary search?
    -often sorted array or matrix (usually can only do this when sorted in some way)
How to initialize left and right pointers?

When to exit the while loop (left < right or left <= right)

How to update mid (boundary)
    -choose left = mid or left = mid + 1? or use right in this case?
"""

#Leetcode 1011
"""
left is the minimum possible ship capacity, which is the max value of the array in this case
right is the sum of all weights (in the case of just having 1 day
"""

def shipWithinDays(weights, days):
    max = 0
    sum = 0

    for weight in weights:
        max = max(max, weight)
        sum += weight

    low = max
    high = sum

    while low < high:
        #to prevent integer overflow
        #mid is current capacity - continues to change as progress in the algorithm
        mid = low + (high - low)// 2

        if isEnoughCapacity(mid, weights, days):
            high = mid
        else:
            low = mid + 1


    return low

def isEnoughCapacity(capacity, weights, days):
    total = 0
    num_of_days = 1

    for weight in weights:
        total += weight
        if total > capacity:
            num_of_days + 1
            total = weight

    return num_of_days <= days

