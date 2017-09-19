function squareDigits(num) {
    var newStr = num.toString();
    var newArr = newStr.split(''); //may the code be with you

    var result = newArr.map(function (x) {
        return Math.pow(x, 2);

    });
    return parseInt(result.join(''));

}

//     function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

// }