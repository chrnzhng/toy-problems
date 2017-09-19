// Return True if number of X's equals number of O's

// function XO(str) {
//     var newArr = str.toLowerCase().split("");
//     console.log(newArr);
//     var numOfX = 0;
//     for (var i = 0; i < newArr.length; i++) {
//         if (newArr[i] == "x") {
//             numOfX++;
//         }
//         console.log(numOfX);
//     }
//     var numOfO = 0;
//     for (var j = 0; j < newArr.length; j++) {
//         if (newArr[j] == "o") {
//             numOfO++;
//         }
//         console.log(numOfO); //code here

//         if (numOfX == numOfO) {
//             return true;
//         } else return false;
//     }

// }

//Best practices

function XO(str) {
    str = str.toLowerCase().split('');
    const x = str.filter(x => {
        return x == 'x'
    })
    const o = str.filter(x => {
        return x == 'o'
    })

    return x.length == o.length
}

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}