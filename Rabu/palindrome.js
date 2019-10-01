function palindrome(kata) {
    var abc = ''
    for (var i = 0; i < kata.length; i++) {
        abc += kata[i]
    }
    var cba = ''
    for (var j = kata.length - 1; j >= 0; j--) {
        cba += kata[j]
    }
    if (abc === cba) {
        return true
    }
    else { return false }
}
console.log(palindrome('14')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
