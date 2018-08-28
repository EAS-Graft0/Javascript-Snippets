var arr = [1, 2, 3, 4, 5];

function minimax(arr) {
    var min = Math.min.apply(Math, arr)
    var max = Math.max.apply(Math, arr)
    console.log(arr.reduce((a, b) => a + b, 0) - min, arr.reduce((a, b) => a + b, 0) - max)
}

minimax(arr);