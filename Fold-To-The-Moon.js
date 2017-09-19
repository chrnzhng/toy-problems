//https://www.codewars.com/kata/folding-your-way-to-the-moon/train/javascript

function foldTo(dist) {
    let counter = 0;
    let thickness = 0.0001;
    if (dist <= 0) {
        return null
    }

    while (thickness < dist) {
        thickness *= 2;
        counter++;
    }

    return counter;
}


foldTo(384000000);

// Best practices:

function foldTo(n) {
    return n > 0 ? Math.max(0, Math.ceil(Math.log2(1e4 * n))) : null;
}