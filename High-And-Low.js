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
    