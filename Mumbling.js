// https: //www.codewars.com/kata/mumbling



function accum(str) {
    let newArr = str.toLowerCase().split('')

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].toUpperCase() + newArr[i].repeat(i)
    }
    return newArr.join(',').replace(/,/g, "-")
}

// accum('cwAt')