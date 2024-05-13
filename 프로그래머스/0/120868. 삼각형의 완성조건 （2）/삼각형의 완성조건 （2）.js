/**
* 원소는 자연수
* 나머지 한 변이 될 수 있는 정수의 개수를 return
* sort : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
* Set : 원시값이나 객체 참조 값 등 모든 유형의 고유 값을 저장할 때 사용할 수 있음
*/

function solution(sides) {
    let answer = [];
    
    // 오름차순으로 정렬
    let [a, b] = sides.sort((a, b) => a - b);
    
    // 가장 긴 변이 b인 경우
    for (i = b + 1 - a; i <= b; i++) {
        answer.push(i);
    }
    
    // 나머지 한 변이 가장 긴 경우
    for (i = b + 1; i < a + b; i++) {
        answer.push(i);
    }
    
    // 중복 제거
    answer = [...new Set(answer)];
    
    return answer.length;
}