var result = '\n';
for (var x = 1; x < 11; x++) {
    for (var y = 1; y < 11; y++) {
        result += (x * y) + ' ';
    }
    result += '\n'
}
console.log(result)
