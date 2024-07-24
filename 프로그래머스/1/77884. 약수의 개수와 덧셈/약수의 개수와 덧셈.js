/**
* 약수의 개수가 짝수인 수는 더함, 홀수인 수는 뺀 수를 return
* Math.sqrt : 숫자의 제곱근을 반환
*/

function solution(left, right) {
    let answer = 0;
    for (let num = left; num <= right; num++) {
        let countDivisors = 0;
        
        // 약수 개수 세기
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                // i가 약수
                if (i * i === num) {
                    // 제곱수인 경우
                    countDivisors += 1;
                } else {
                    // 제곱수가 아닌 경우
                    countDivisors += 2;
                }
            }
        }
        
        // 약수 개수가 짝수이면 더함, 홀수이면 뺌
        if (countDivisors % 2 === 0) {
            answer += num;
        } else {
            answer -= num;
        }
    }
    
    return answer;
}