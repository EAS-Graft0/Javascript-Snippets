var oldperc = 0
var newperc = 100
var time = 5
function addNumber() {
    oldperc++
    console.log(oldperc)
    if (oldperc >= newperc) {
        clearInterval(myInterval)
    }
}
var myInterval = setInterval(addNumber, (time * 1000 / newperc - oldperc))