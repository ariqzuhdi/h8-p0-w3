function balikString(input) {
    var kata = ''
    for (var i = input.length - 1; i >= 0; i--) {
        kata += input[i]
    }
    var kebalik = ''
    for (var j = kata.length - 1; j >= 0; j--) {
        kebalik += kata[j]
    }
    console.log(kebalik)
}

var input = ['hello world!']
balikString(input)