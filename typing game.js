var wordsToType = []

var wordsTyped = []

//use if statement, when space is precced go to next index of array

var phrase = "the quick brown fox jumped over the lazy dog"
wordsToType.push(phrase.split(' '))

//on space send model through to checkwin function



function checkWord(word, index) {
    if (word == wordsToType[index]) {
        console.log('correct')
    } else {
        console.log('wrong')
            //change word to red
    }
}