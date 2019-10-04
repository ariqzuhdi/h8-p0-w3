function mengelompokkanAngka(arr) {
  var array = []
  var genap = []
  var ganjil = []
  var kelipatan3 = []
  // var array = []
  for (var i = 0; i < arr.length; i++) {
    array.push(arr[i])
    if (array[i] % 3 === 0) {
      kelipatan3.push(array[i])
    }
    else if (array[i] % 2 === 0) {
      genap.push(array[i])
    }
    else if (array[i] % 2 !== 0) {
      ganjil.push(array[i])
    }
  }
  var hasil = [genap, ganjil, kelipatan3]
  return hasil
}


// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]