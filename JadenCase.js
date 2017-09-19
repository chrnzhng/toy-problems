// JadenCase a sentence

String.prototype.toJadenCase = function () {
    return this.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

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