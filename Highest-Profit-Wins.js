// Highest Profit Wins

// My soln:

function minMax(arr) {
    var newArr = []
    var min = Math.min.apply(null, arr)
    var max = Math.max.apply(null, arr)

    newArr.push(min)
    newArr.push(max)

    return newArr

}

minMax([1, 2, 3, 4, 5])

// Best soln:

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
