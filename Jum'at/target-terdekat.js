function targetTerdekat(arr) {
    var x = []
    var o = 0
    var total = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            x.push(i)
        } else if (arr[i] === 'o') {
            o = i
        }
    }
    if (x.length === 0) {
        return 0
    } else {
        for (var j = 0; j < x.length; j++) {
            (total.push(Math.abs(x[j] - o)))
            total.sort(function (a, b) { return a - b })
        }
        return total[0]
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
// var biggestNumber = []
// var arr = [1, 2 ,3, 4, 5, 9, 7, 8, 12, 6, 1, 3, 6]
// for(var i = 0; i < arr.length; i++){
//     if(biggestNumber < arr[i]){
//         biggestNumber = arr[i]
//     }
// }
// console.log(biggestNumber)