/**
* 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임
* 0점에서 10점까지
* 1. 숫자 처리
* - '10'처럼 두 자리 숫자를 위해 1뒤에 0이 오면 temp에 10을 할당, i++로 다음 인덱스를 건너뜀
* - 한 자리 숫자는 그대로 temp에 저장됨
* 2. 보너스 처리
* - S, D, T는 각각 1제곱, 2제곱, 3제곱을 의미. Math.pow()로 제곱을 계산한 후 answer배열에 추가
* 3. 옵션 처리
* - #은 answer의 마지막 점수를 음수로 바꿈. *는 마지막 점수와 바로 이전 점수를 두 배로 만듬
* - answer.length를 확인하여 직전 점수가 존재하는지 검사한 후 두 배로 함
* 4. 최종 점수 계산
* - reduce를 사용하여 answer배열의 모든 점수를 더한 후 최종 점수를 반환
*/

function solution(dartResult) {
    let answer = []; // 각 라운드 점수를 저장할 배열
    let temp = 0; // 현재 점수를 임시 저장할 변수
    
    
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= '0' && dartResult[i] <= '9') {  // 숫자일 경우
            // '10'을 처리하기 위해 두 자리 숫자인지 확인
            if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
                temp = 10;
                i++; // 10일 경우 다음 문자 건너뜀
            } else {
                temp = parseInt(dartResult[i]); // 한 자리 숫자는 그대로 변환
            }
        } else if (dartResult[i] === 'S') {   // 1제곱
            answer.push(temp);               // 보너스 없이 그대로 추가
        } else if (dartResult[i] === 'D') {   // 2제곱
            answer.push(Math.pow(temp, 2));   // 2제곱하여 추가
        } else if (dartResult[i] === 'T') {   // 3제곱
            answer.push(Math.pow(temp, 3));   // 3제곱하여 추가
        } else if (dartResult[i] === '#') {   // 아차상: 이전 점수를 음수로
            answer[answer.length - 1] *= -1;
        } else if (dartResult[i] === '*') {   // 스타상: 직전 점수와 해당 점수를 두 배로
            answer[answer.length - 1] *= 2;    // 현재 점수 두 배
            if (answer.length > 1) {
                answer[answer.length - 2] *= 2; // 직전 점수 두 배
            }
        }
    }
    
    // 모든 라운드의 점수를 합산하여 최종 점수를 반환
    return answer.reduce((acc, cur) => acc + cur, 0);
}