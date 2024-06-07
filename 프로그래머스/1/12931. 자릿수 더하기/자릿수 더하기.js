/**
* Math.floor : 항상 반올림하여 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환
*/

function solution(n) {
    let answer = 0;
    while (n > 0) {
        answer += n % 10; // 현재 숫자의 일의 자리를 더함
        n = Math.floor(n / 10); // 일의 자리를 없애고 다음 자리로 이동
    }
    
    return answer;
}