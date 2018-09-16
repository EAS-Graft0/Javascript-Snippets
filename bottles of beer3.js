var s = "bottles of beer"
var t = "Take one down and pass it around"
var u = "" + u + ""
i = 99
while (i >= 0) {
    switch (i) {
        case 2:
            console.log(i + " " + s + " on the wall, " + i + " " + s + ".\n" + t + ", " + (i - 1) + u + " on the wall.")
            break;
        case 1:
            console.log(i + u + " on the wall, " + i + u + ".\n" + t + ", no more bottles of beer on the wall.")
            break;
        case 0:
            console.log("No more " + s + " on the wall, no more " + s + ". \nGo to the store and buy some more,  " + s + " on the wall.")
            break;
        default:
            console.log(i + " " + s + " on the wall, " + i + " " + s + ".\n" + t + ", 99 " + s + " on the wall.")
            break;
    }
    i--
}