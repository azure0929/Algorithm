/**
* 각 자릿수를 큰것부터 작은 순으로 정렬 -> 새로운 정수를 return
*/

function solution(n) {
    // 숫자를 자릿수별로 분해하여 배열에 넣기
    let digits = [];
    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    
    // 내림차순으로 정렬
    digits.sort((a, b) => b - a);
    
    // 정수로 합치기
    let result = 0;
    for (let digit of digits) {
        result = result * 10 + digit;
    }
    
    return result;
}