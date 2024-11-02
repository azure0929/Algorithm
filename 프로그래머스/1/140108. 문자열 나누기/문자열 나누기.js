/**
* 첫 글자를 읽음. 글자 = x
* 지금까지 읽은 문자열을 분리
* 남은 부분에 대해서 이 과정을 반복
* 남은 부분이 없다면 종료
*/

function solution(s) {
    let stack = []; // 현재 그룹을 저장할 스택
    let count = 0; // 그룹의 수를 셀 변수
    
    for (let char of s) {
        stack.push(char); // 현재 문자를 스택에 추가
        
        const sameCount = stack.filter(item => item === stack[0]).length; // 같은 문자의 개수
        const notSameCount = stack.filter(item => item !== stack[0]).length; // 다른 문자의 개수
        
        // 같은 문자와 다른 문자의 개수가 같다면
        if (sameCount === notSameCount) {
            count++; // 그룹 수 증가
            stack = []; // 스택 초기화
        }
    }
    
    // 마지막 스택에 남은 문자가 있으면 하나의 그룹으로 처리
    if (stack.length > 0) {
        count++;
    }
    
    return count; // 최종 그룹 수 반환
}