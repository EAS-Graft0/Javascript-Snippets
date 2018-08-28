var findNthNumber = function(list, index) {
    var current = -1
    return list.find(next => {
        return !isNaN(next) && ++current === index;
    })
}
list = ['a', 1, 2, 'f', 'g', 3];
console.log(findNthNumber(list, 2));