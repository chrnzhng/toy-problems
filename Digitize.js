digitize(348597)

// https://www.codewars.com/kata/highest-and-lowest/javascript

function highAndLow(numbers) {
    var arr = numbers.split(" ")
    console.log(arr)
    var min = Math.min.apply(Math, arr)
    console.log(min)
    var max = Math.max.apply(Math, arr)
    console.log(max)
    return max.toString() + " " + min.toString()
}