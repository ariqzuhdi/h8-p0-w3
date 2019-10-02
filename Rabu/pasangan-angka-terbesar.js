function pasanganTerbesar(num) {
    var nomor = String(num)
    var temp = ''
    for (i = 0; i < nomor.length - 1; i++) {
        temp += nomor[i] + nomor[i + 1] + ' '

    }

    var pisah = temp.split(' ').map(function (item) { return parseInt(item, 10) })
    var pop = pisah.pop()
    var angkaBig = pisah[0]
    for (var i = 0; i < pisah.length; i++) {
        if (angkaBig < pisah[i]) {
            angkaBig = pisah[i]
        }

    }

    return angkaBig
}



// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
