for (var i in array) {
    if (newArray[array[i].type]) {
        newArray[array[i].type] = []
        newArray[array[i].type].push array[i]
    } else {
        newArray[array[i].type].push array[i]
    }
}