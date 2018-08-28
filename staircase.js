function staircase(n) {
    for (let i = 1; i <= n; i++) {
        var col = i;
        for (let j = 1; j <= n - col; j++) {
            process.stdout.write(' ');
        }
        for (let j = 1; j <= col; j++) {
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
}

staircase(6);


/*
function staircase(n) {
    var arr = [];
    for (let i = 0; i <= n - 1; i++) {
        var col = i;
        for (let j = 0; j <= n - col; j++) {
            console.log(' ');
        }
        for (let j = 0; j <= col; j++) {
            console.log('#');
        }
        console.log('\n');
    }
    for (let i in arr) {
        for (let j in arr[i]) {
            arr[i][j - 1] = '#';
        }
    }
    // console.log(arr);
    // arr[0][arr.length - 1] = '#';

    // var arr = [
    //     [' ', ' ', ' ', ' ', ' ', '#'],
    //     [' ', ' ', ' ', ' ', '#', '#'],
    //     [],
    //     [],
    //     [],
    //     []
    // ];

    for (let i in arr) {
        // console.log(arr[i].join(''));
        // arr[i][i] = '#';

    }
}


function staircase(n) {
    var arr = Array.from(new Array(n).keys());
    var string = '';
    for (let i in arr) {
        string = string + '#';
        console.log(string);
    }
}

staircase(6);

*/