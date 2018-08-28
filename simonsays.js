var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var numberArray = []
var numberPattern = []

function uesrClick(number) {
    numberPattern.push(number)
    if (numberArray.length == numberPattern.length) {
        checkPattern(numberArray, numberPattern)
    }
}

function addNumber() {
    numberArray.push(numbers[Math.floor(Math.random() * numbers.length - 1)])
    numberPattern = []
}

function checkPattern(numberPattern, numberArray) {
    if (numberPattern == numberArray) {
        addNumber()
        console.log('win')
    } else {
        console.log('lose')
    }
}

addNumber()