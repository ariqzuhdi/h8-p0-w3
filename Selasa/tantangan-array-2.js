function dataHandling(input) {
    var abc = ''
    for (var i = 0; i < input.length; i++) {
        abc += '\n'
        for (var j = 0; j <= input.length; j++) {
            abc = abc + '\n'
            abc += input[i][j]
        }

        console.log('Nomor ID: ' + input[i][0])
        console.log('Nama Lengkap: ' + input[i][1])
        console.log('TTL: ' + input[i][2] + ' ' + input[i][3])
        console.log('Hobi: ' + input[i][4])
        console.log('\n')
    }


    return
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input);
