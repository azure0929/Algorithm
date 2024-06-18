/**
* forEach : 배열의 각 요소에 대해 주어진 함수를 실행
*/

function solution(arr) {
    // 배열이 비어있는 경우 예외 처리
    if (arr.length === 0) return 0; 
    
    let sum = 0;
    arr.forEach(num => {
        // 배열 요소들을 하나씩 더함
        sum += num;
    });
    
    // 평균 계산
    return sum / arr.length;
}