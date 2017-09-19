
function descendingOrder(n) {
    myArray = n.toString().split("").map(function (t) {
        return parseInt(t)
    })
    console.log(myArray)
    myArray.sort((a, b) => b - a)
    console.log(myArray)
    var result = myArray.join('')
    console.log(result)
    return parseInt(result)

}

descendingOrder(1120)

// In class solution

function descendingOrder(n) {
    myArray = n.toString(10).split("").map(function (t) {
        return parseInt(t)
    })

    myArray.sort((a, b) => a + b)

    var result = myArray.join('')

    return parseInt(result)

}

descendingOrder(123456789)