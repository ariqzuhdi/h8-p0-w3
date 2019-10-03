function tentukanDeretAritmatika(arr) {
    var check = true
    var beda = arr[1] - arr[0]
    for (var i = 0; i < arr.length - 1; i++) {
        var beda1 = arr[i + 1] - arr[i]
        if (beda !== beda1) {
            check = false
            
        }
    }
    return check
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

