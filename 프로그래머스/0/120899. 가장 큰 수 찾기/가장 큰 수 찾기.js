// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return
// Math.max : 이 정적 메서드는 매개변수로 주어진 숫자 중 가장 큰 수를 반환하거나, 매개변수가 없을 경우 Infinity를 반환

function solution(array) {
    let max = array[0]; // 배열의 첫 번째 요소를 최댓값으로 설정
    let maxIndex = 0; // 최댓값의 인덱스를 저장할 변수를 초기화
    
    // 배열을 순회하면서 최댓값을 찾기
    for (let i = 1; i < array.length; i++) {
        // 현재 요소가 최댓값보다 크다면 최댓값과 그 인덱스를 업데이트
        if (array[i] > max) {
            max = array[i]; // 최댓값을 현재 요소로 업데이트
            maxIndex = i; // 최댓값의 인덱스를 업데이트
        }
    }
    
    // 최댓값과 그 인덱스를 반환
    return [max, maxIndex];
}