// Find the int odd number of times 

function findOdd(A) {
    //happy coding!
    var x = 0;
    for (var i = 0; i < A.length; i++) {
        x = x ^ A[i];
    }
    return x;
}
