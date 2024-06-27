/**
* 몇 번이나 반복해야 하는지 반환
* 주어진 수가 1인 경우에는 0을
* 500번 반복할 때까지 1이 되지 않는다면 -1 반환
*/

function solution(num) {
    let answer = 0;
    
    for (let i = 0; i < 500; i++) { // 최대 500회 반복
        if (num === 1) { // num이 1이 되면 반복 종료
            return answer;
        }
        if (num % 2 === 0) { // num이 짝수인 경우
            num /= 2;
        } else { // num이 홀수인 경우
            num = (num * 3) + 1;
        }
        
        answer++; // 반복 횟수 증가
    }
    
    return -1; // 500회 반복 후에도 num이 1이 되지 않으면 -1 반환
}