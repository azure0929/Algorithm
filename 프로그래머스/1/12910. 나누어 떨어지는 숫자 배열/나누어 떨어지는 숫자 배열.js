/**
* divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환
* filter : 주어진 배열의 일부에 대한 얕은 복사본을 생성, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링
* sort : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
*/

function solution(arr, divisor) {
    // 배열에서 divisor로 나누어 떨어지는 숫자만 필터링
    const answer = arr.filter(num => num % divisor === 0);
    
    // 필터링된 숫자들이 없으면 [-1] 반환
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}