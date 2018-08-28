var time = '07:05:45PM';
var time2 = '11:04:13PM';
var time3 = '03:55:25PM';
var time4 = '03:55:25AM';
var time5 = '12:55:25AM';
var time6 = '00:55:25AM';
var time7 = '12:45:54PM';

function convertTime(s) {
    if (s.substring(s.length - 2, s.length) == 'PM' && s.substring(0, 2) != 12) {
        var temp = s = s.substring(0, s.length - 2);
        temp = temp.split(':');
        temp[0] = parseInt(temp) + 12;
        temp.toString()
        temp = temp.join(':')
        s = temp;
    } else if (s.substring(s.length - 2, s.length) == 'PM' && s.substring(0, 2) == 12) {
        var temp = s = s.substring(0, s.length - 2);
        s = temp;
    } else if (s.substring(0, 2) == 12) {
        var temp = s = s.substring(0, s.length - 2);
        temp = temp.split(':');
        temp[0] = parseInt(temp) - 12;
        temp.toString();
        temp = temp.join(':')
        s = "0" + temp;
    } else if (s.substring(0, 2) == '00') {
        var temp = s = s.substring(0, s.length - 2);
        temp = temp.split(':');
        temp[0] = parseInt(temp) + 12;
        temp.toString();
        temp = temp.join(':')
        s = temp;
    } else {
        var temp = s = s.substring(0, s.length - 2);
        temp = temp.split(':');
        temp.toString()
        temp = temp.join(':')
        s = temp;
    }
    return s;
}

console.log(convertTime(time));
console.log(convertTime(time2));
console.log(convertTime(time3));
console.log(convertTime(time4));
console.log(convertTime(time5));
console.log(convertTime(time6));
console.log(convertTime(time7));