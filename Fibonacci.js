// Your task is to create an array of size n with the values of the Fibonnaci sequence, and reverse the order in which the sequence is displayed.

// For example: [1, 1, 2, 3, 5] would become[5, 3, 2, 1, 1]

// You can assume that n will always be a positive integer between and including, 1 and 64.

function fbi(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            arr.push(1)
        } else {
            var firstN = arr[i - 1]
            var secondN = arr[i - 2]
            arr.push(firstN + secondN)
        }
    }
    return arr.reverse()
}

fbi(64);
