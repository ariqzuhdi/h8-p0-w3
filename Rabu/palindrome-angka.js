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

function angkaPalindrome(num) {
    var check = false
    while (check === false) {
        num++
        if (palindrome(String(num)) === true) {
            return num
        }
    }

}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
