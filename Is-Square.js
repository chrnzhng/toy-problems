// Determine if the passed through integer is a square number

var isSquare = function (n) {
    if (n === 0) {
        return true;
    } else
        return n > 0 && Math.sqrt(n) % 1 === 0; // fix me
}

// Best Soln

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

// Find the shortest word in the string input

function findShort(s) {
    shortest = s.split(' ').sort(function (a, b) {
        return a.length - b.length;
    }).shift();
    return shortest.length
}