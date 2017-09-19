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