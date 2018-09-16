var arr = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ]
for (i = 0; i < arr.length; i++) {
    setTimeout(function() {
        arr[i] = '='
        console.log(arr)
    }, (6000 / 100) * arr.length)
}