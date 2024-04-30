// n이 제곱수라면 1, 아니라면 2를 return
// Math.isInteger : 주어진 값이 정수인지 판별

function solution(n) {
    // 주어진 수의 제곱근을 구함
    let sqrt = Math.sqrt(n);
    
    // 제곱근이 정수인 경우 제곱수
    if (Number.isInteger(sqrt)) {
        return 1;
    }
    
    // 제곱근이 정수가 아닌 경우 제곱수가 아님
    return 2;
}