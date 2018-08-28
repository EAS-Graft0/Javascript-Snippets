var arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    var positive = 0,
        negative = 0,
        zero = 0;
    for (let i in arr) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    positive = positive / arr.length;
    negative = negative / arr.length;
    zero = zero / arr.length;
    return [positive, negative, zero];
}

console.log(plusMinus(arr)[0]);
console.log(plusMinus(arr)[1]);
console.log(plusMinus(arr)[2]);