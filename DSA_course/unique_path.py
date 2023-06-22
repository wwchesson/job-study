

#leetcode 62

"""
function need current coordinates of robot
also needs to know locaiton of the finishline
"""



def unique_paths(m, n):
    #set up storage for previously visited cells
    #memoization data structures need to generally mimic the input. In this case, it's a gameboard
    memo = []

    for i in range(m):
        memo.append([-1]*n)



    return search(m, n, 0, 0, memo)


#recursive function
def search(m, n, row, col, memo):
    #base case is to stop when reach finish or when out of bounds
    #finish line
    if row == m-1 and col == n-1: return 1
    if row >= m or col >= n: return 0

    #want to check if visited square before
    if memo[row][col] != -1: return memo[row][col]

    #if first time we've been to these coordinates, try moving right or down
    down = search(m, n, row + 1, col, memo)
    print("down", down, "row", row, "col", col)
    right = search(m, n, row, col + 1, memo)
    print("right", right)

    memo[row][col] = down + right
    print("row", row, "col", col, "memo[row][col]", memo[row][col])

    return down + right



print(unique_paths(3, 7))