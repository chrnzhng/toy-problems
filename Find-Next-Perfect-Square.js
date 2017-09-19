// https: //www.codewars.com/kata/find-the-next-perfect-square/train/javascript

function findNextPerfectSquare(n) {
    const sqRt = Math.sqrt(n);
    // if not a perfect square, return -1
    if (Number.isInteger(sqRt)) {
        return Math.pow(sqRt + 1, 2);
    } else return -1
}

findNextPerfectSquare(47);
