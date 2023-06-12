def minEatingSpeed(piles, H):

    def feasible(speed):
        pile_sum = sum((pile - 1) // speed + 1 for pile in piles)
        print("pile sum", pile_sum)
        print(pile_sum <= H)
        return  pile_sum <= H

    left, right = 1, max(piles)

    while left < right:
        mid = left + (right - left) // 2

        if feasible(mid):

            right = mid
        else:
            left = mid + 1

    return left

print(minEatingSpeed([30, 11, 23, 4, 20], 5))