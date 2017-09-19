function positiveSum(arr) {
    var total = 0
    for (var n = 0; n < arr.length; n++) {
        if (arr[n] > 0) {
            total += arr[n];
        }
    }
    return total;
}

// positiveSum([1, -4, 7, 12])