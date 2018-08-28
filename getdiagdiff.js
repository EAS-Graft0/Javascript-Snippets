var testCases = [[[11, 2, 4], [4, 5, 6], [10, 8, -12] ], [[-1, 1, -7, -8], [-10, -8, -5, -2], [0, 9, 7, -1], [4, 4, -2, 1] ]];
function getDiagDiff(arr) {
    var temp1 = 0, temp2 = 0;
    for (let i in arr) {
        temp1 += arr[i][i];
        temp2 += arr[i][arr.length - i - 1];
    }
    return Math.abs(temp1 - temp2);
}
console.log(getDiagDiff(testCases[0]), getDiagDiff(testCases[1]));