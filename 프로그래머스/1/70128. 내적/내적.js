/**
* forEach : 배열의 각 요소를 순회하며 주어진 함수 실행
*/

function solution(a, b) {
    let answer = 0;
    a.forEach((val, i) => {
        answer += val * b[i];
    });
    
    return answer;
}