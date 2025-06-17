/**
* 두 정수에 대한 연산
* 두 정수를 붙여서 쓴 값을 반환
* `${a}${b}` : 템플릿 리터럴로 문자열로 합치기
* Number() : 문자열을 숫자로 변환
*/

function solution(a, b) {
    const ab = Number(`${a}${b}`);
    const ba = Number(`${b}${a}`);
    return ab > ba ? ab : ba;
}