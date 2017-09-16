// Highest Profit Wins

// My soln:

function minMax(arr) {
    var newArr = []
    var min = Math.min.apply(null, arr)
    var max = Math.max.apply(null, arr)

    newArr.push(min)
    newArr.push(max)

    return newArr

}

minMax([1, 2, 3, 4, 5])

// Best soln:

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

//Even Sides of an Array

function findEvenIndex(arr) {
    var sum = 0,
        leftSum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (var i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if (leftSum === sum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}


//Square Each Number

// squareEveryNumber(num) {


// }
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


function descendingOrder(n) {
    myArray = n.toString(10).split("").map(function (t) {
        return parseInt(t)
    })

    myArray.sort((a, b) => a + b)

    var result = myArray.join('')

    return parseInt(result)

}

descendingOrder(123456789)

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

function highAndLow(numbers) {

    var newArr = numbers.split(" ")
    console.log(newArr);
    var low = Math.min.apply(Math, newArr);
    console.log(low)
    var high = Math.max.apply(Math, newArr);
    console.log(high)
    var newerArr = []

    newerArr.push(high, low)
    console.log(newerArr)
    result = newerArr.toString()

}

//highAndLow("1 2 3 4 5")
// highAndLow("1 9 3 4 -5")


// https: //www.codewars.com/kata/find-the-next-perfect-square/train/javascript

function findNextPerfectSquare(n) {
    const sqRt = Math.sqrt(n);
    // if not a perfect square, return -1
    if (Number.isInteger(sqRt)) {
        return Math.pow(sqRt + 1, 2);
    } else return -1
}

findNextPerfectSquare(47);

// https: //www.codewars.com/kata/mumbling



function accum(str) {
    let newArr = str.toLowerCase().split('')

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].toUpperCase() + newArr[i].repeat(i)
    }
    return newArr.join(',').replace(/,/g, "-")
}

// accum('cwAt')


// https: //www.codewars.com/kata/simple-beads-count/train/javascript

//     1. Clarify(Count the number of red beads against blue beads)
// 2. Sample data: (-4, -1, 0, 1, 2, 4, 8, 11)
// 3. Sample solution(0, 0, 0, 0, 2, 6, 14, 20) // (n-1)(2)
// 4. Code constructs

// 5.
// function countRed(numBlue) {
//     if less than 2
//     return 0
//     else return (n - 1) * 2
// }

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

// https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript

function digitize(n) {
    var answer = n.toString().split('').map(Number).reverse()
    console.log(answer)
    return answer; //code here
}

digitize(348597)

// https://www.codewars.com/kata/highest-and-lowest/javascript

function highAndLow(numbers) {
    var arr = numbers.split(" ")
    console.log(arr)
    var min = Math.min.apply(Math, arr)
    console.log(min)
    var max = Math.max.apply(Math, arr)
    console.log(max)
    return max.toString() + " " + min.toString()
}

highAndLow("1 2 3 4 5"); // return "5 1"

// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//   }

// JadenCase a sentence

String.prototype.toJadenCase = function () {
    return this.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

function descendingOrder(n) {
    myArray = n.toString().split("").map(function (t) {
        return parseInt(t)
    })
    console.log(myArray)
    myArray.sort((a, b) => b - a)
    console.log(myArray)
    var result = myArray.join('')
    console.log(result)
    return parseInt(result)

}

descendingOrder(1120)


var decodeMorse = function (morseCode) {

    var a = morseCode.trim().split("   ").map(function (word) {
        x = word.split(" ").map(function (letter) {
            return MORSE_CODE[letter]
        }).join("")
        return x
    }).join(" ")
    return a
}

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

//
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

// Remove all the vowels from a string

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// Find the int odd number of times 

function findOdd(A) {
    //happy coding!
    var x = 0;
    for (var i = 0; i < A.length; i++) {
        x = x ^ A[i];
    }
    return x;
}

// Counting Sheep..

function countSheeps(arrayOfSheep) {
    var sheepCount = 0;

    for (var i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sheepCount++
        }
    }
    return sheepCount; // TODO May the force be with you
}

// Best practices

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

// Determine if the passed through integer is a square number

var isSquare = function(n){
    if (n === 0) {
    return true;}
    else 
   return n > 0 && Math.sqrt(n) % 1 === 0;// fix me
}

// Best Soln

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }