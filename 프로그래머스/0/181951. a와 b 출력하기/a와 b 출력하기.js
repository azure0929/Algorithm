/*
* a와 b는 정수
* 각 수를 입력받는다.
*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const [a, b] = line.split(' ').map(Number);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    rl.close();
});