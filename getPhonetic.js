var alphabet = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"];

function getPhonetic(word) {
	word = word.toUpperCase();
    word = word.split('');
    for (let i in word) {
        alphabet.find((phoneticWord) => {
            if (phoneticWord.charAt(0) == word[i]) {
                word[i] = phoneticWord;
            }
        })
    }
    word.join('')
    return word;
}


console.log(getPhonetic("ALEX"))
console.log(getPhonetic("Georgia"))