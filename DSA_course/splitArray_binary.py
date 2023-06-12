def splitArray(nums, m):

    def feasible(threshold):
        count = 1
        total = 0

        for num in nums:
            total += num

            if total > threshold:
                total = num
                count += 1
                print("count", count)
                if count > m:
                    return False
        return True

    left, right = max(nums), sum(nums)

    while left < right:
        mid = left + (right - left) // 2

        if feasible(mid):
            right = mid
        else:
            left = mid + 1

        print(mid, left, right)

    return left

print(splitArray([7, 2, 5, 10, 8], 2))