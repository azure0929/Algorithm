/**
* 정수 x의 제곱이라면 x+1의 제곱을 return
*/

function solution(n) {
    let x = 1;
    while (x * x < n) {
        x++;
    }
    
    if (x * x === n) {
        return (x + 1) * (x + 1);
    } else {
        return -1;
    }
}