/**
* 가장 큰 정수를 두 수의 짝꿍
* x, y의 짝꿍이 0으로만 구성되어 있으면, 짝꿍은 0
* 두 정수 x, y가 주어졌을 때 x, y의 짝꿍을 return
*/

function solution(X, Y) {
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);
    
    // 숫자의 빈도수 계산
    for (let num of X) countX[num]++;
    for (let num of Y) countY[num]++;
    
    let answer = '';
    
    // 숫자 9부터 0까지 비교하며 결과 문자열 생성
    for (let i = 9; i >= 0; i--) {
        const minCount = Math.min(countX[i], countY[i]);
        answer += String(i).repeat(minCount);
    }
    
    // 예외 처리
    if (answer === '') return '-1';
    if (answer[0] === '0') return '0'; // 모든 값이 0일 때
    
    return answer;
}