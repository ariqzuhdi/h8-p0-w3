function groupAnimals(animals) {
    var hewan = [[]]
    var compare = 0
    animals.sort()
    hewan[0].push(animals[0])
    for (var i = 1; i < animals.length; i++) {
        if (animals[i][0] === hewan[compare][0][0]) {
            hewan[compare].push(animals[i])
        }
        else {
            compare++
            hewan[compare] = [animals[i]]
        }
    }
    return hewan
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]