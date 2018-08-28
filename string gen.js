var placeHolderString = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var combinations = Math.pow(array.length, placeHolderString.length)
var strings = []

function generateString() {
    var tempString = []
    for (char in placeHolderString) {
        tempString.push(array[Math.floor(Math.random() * Math.floor(array.length))])
    }
    finalString = tempString.toString()
    finalString = finalString.replace(/,/g, '')
    strings.push(finalString)
    return finalString;
}
while (strings.length < combinations) {
    var theStringToAdd = generateString()
    if (strings.indexOf(theStringToAdd) == -1) {
        strings.push(generateString())
    }
    console.log('Found ' + strings.length + ' combinations out of ' + combinations + ' total.')
}