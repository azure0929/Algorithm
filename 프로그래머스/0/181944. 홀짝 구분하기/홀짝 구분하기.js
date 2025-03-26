const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const n = Number(line);
    console.log(`${n} is ${n % 2 === 0 ? 'even' : 'odd'}`)
    rl.close();
});