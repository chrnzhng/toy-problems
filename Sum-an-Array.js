function sumArray(array) {
    var total = 0;
    let sortedArray = array.sort(function (a, b) {
        return a - b;
    });

    var popped = sortedArray.pop()
    var shifted = sortedArray.shift()

    for (var n = 0; n < sortedArray.length; n++) {
        total += sortedArray[n];
    }
    return total;
}


// sumArray([6, 2, 1, 8, 10])
// sumArray([1, 1, 11, 2, 3])

function sumArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length < 2) {
        return 0;
    } else {
        array = array.sort(function (a, b) {
            return a - b;
        });
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0