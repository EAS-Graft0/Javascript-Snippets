var string = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (a in string) {
    for (i in array) {
        for (j in array) {
            string[a] = array[j]
            console.log(string)
        }
    }
}