function dataHandling2(input) {
    input.splice(1, 5, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro')
    console.log(input)

    var tanggal = input[3]
    // console.log(tanggal)
    var tanggalan = tanggal.split('/')
    // console.log(tanggalan)
    // console.log(tanggalan[1])
    var bulan = tanggalan[1]
    switch (Number(bulan)) {
        case 01: console.log('Januari');
            break;
        case 02: console.log('Februari');
            break;
        case 03: console.log('Maret');
            break;
        case 04: console.log('April');
            break;
        case 05: console.log('Mei');
            break;
        case 06: console.log('Juni');
            break;
        case 07: console.log('Juli');
            break;
        case 08: console.log('Agustus');
            break;
        case 09: console.log('September');
            break;
        case 10: console.log('Oktober');
            break;
        case 11: console.log('November');
            break;
        case 12: console.log('Desember');
            break;
    }
    var tanggalan1 = tanggalan.sort(function (a, b) { return b - a })
    console.log(tanggalan1)
    console.log(tanggalan1.join('-'))
    var nama = input[1].slice(0, 14)
    console.log(nama)


}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
