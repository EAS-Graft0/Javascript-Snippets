    s = "bottles of beer"
    t = "Take one down and pass it around"
for (var i = 99; i >= 0; i--) {
    switch (i) {
        case 2:
            console.log(i + " " + s + " on the wall, " + i + " " + s + ".\n"+t+", " + (i - 1) + " bottle of beer on the wall.")
            break;
        case 1:
            console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.\n"+t+", no more bottle of beer on the wall.")
            break;
        case 0:
            console.log("No more " + s + " on the wall, no more " + s + ". \nGo to the store and buy some more,  " + s + " on the wall.")
            break;
        default:
            console.log(i + " " + s + " on the wall, " + i + " " + s + ".\n"+t+", 99 " + s + " on the wall.")
            break;
    }
}