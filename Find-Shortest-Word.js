// Find the shortest word in the string input

function findShort(s) {
    shortest = s.split(' ').sort(function (a, b) {
        return a.length - b.length;
    }).shift();
    return shortest.length
}

// Best Soln.

function findShort(s) {
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}