function uniquePaths(m, n) {
    const memo = []

    for (let i = 0; i < m; i++) {
        memo.push(new Array(n).fill(-1))
    }

    return memo
}

console.log(uniquePaths(3, 7))