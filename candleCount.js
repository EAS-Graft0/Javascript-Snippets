var arr = [3, 2, 1, 3];
var arr2 = [3, 3, 3, 3, 6, 1, 8, 8, 2, 6, 8, 8, 7, 2, 6, 6, 1, 3];

function countCandles(arr) {
    var most = Math.max.apply(null, arr.sort((a, b) => {
        a - b
    }))
    var repeats = 0;
    for (let i in arr) {
        if (arr[i] == most) {
            repeats++;
        }
    }
    console.log(most)
    console.log(repeats);
}

countCandles(arr);
countCandles(arr2);