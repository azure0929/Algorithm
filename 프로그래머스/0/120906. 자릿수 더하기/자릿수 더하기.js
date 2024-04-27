// n의 각 자리 숫자의 합을 return
// split : 문자열을 지정된 구분자를 기준으로 여러 개의 문자열로 나누어 배열에 담음
// reduce : 배열의 각 요소에 대해 주어진 함수를 실행하고, 하나의 결과값을 반환
// parseInt : 문자열 인자를 구문 분석하여 특정 진법의 정수를 반환

function solution(n) {
    let exam = String(n).split("");
    
    // acc : 누적된 값, cur : 현재 요소
    let sum = exam.reduce((acc, cur) => {
        // parseInt를 사용하여 정수로 변환
        return acc + parseInt(cur);
    }, 0); // 초기값은 0
    
    // 누적된 값을 반환
    return sum;
}