// 머쓱이가 구한 값을 return
// parseInt : 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준의 되는 값)의 정수를 반환
// reduce : 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환
// reduce 함수는 누산기(acc), 현재 값(cur), 현재 인덱스(idx), 원본 배열(src) 이 네 개의 인자를 가짐
// pop : 배열에서 마지막 요소를 제거하고 그 요소를 반환
// split : string 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔

function solution(s) {
    // 입력 문자열을 공백을 기준으로 나누어 배열로 만듬
    let tokens = s.split(' ');
    
    // 스택을 이용하여 숫자를 저장
    let stack = [];
    
    // 각 토큰을 반복
    for (let token of tokens) {
        // 토큰이 'Z'인 경우, 스택에서 마지막 숫자를 제거
        if (token === 'Z') {
            // 스택이 비어있지 않은 경우만 pop() 실행
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // 토큰이 숫자인 경우, 스택에 숫자를 추가
            // 토큰을 숫자로 반환하여 스택에 저장
            stack.push(parseInt(token, 10));
        }
    }
    
    // 스택에 있는 모든 숫자를 합산하여 반환
    return stack.reduce((sum, num) => sum + num, 0);
}