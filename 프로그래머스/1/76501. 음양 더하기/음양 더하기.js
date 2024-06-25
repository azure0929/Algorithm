/**
* 실제 정수들의 합을 구하여 return
* reduce : 배열의 각 요소에 대해 주어진 콜백 함수를 실행. 하나의 결과값을 반환
* acc : 현재까지의 누적값. 초기값은 0
* curr : 현재 요소의 값(`absolutes` 배열의 요소 값)
* idx : 현재 요소의 인덱스
* 콜백 함수 내부에서는 `signs[idx]`를 조건으로 사용하여 해당 요소의 부호가 true이면 현재 요소 값을 더함, 누적값에 반영
=> 반복문을 사용하지 않고도 간결하게 문제를 해결
*/

function solution(absolutes, signs) {
    return absolutes.reduce((acc, curr, idx) => acc + (signs[idx] ? curr : -curr), 0)
}