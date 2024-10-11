/**
* 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더함
* 오름차순
* 반복적으로 numbers 요소에 접근해야 함
* 중복된 숫자를 제거
* Set: 중복된 값을 자동으로 걸러낼 수 있음
* Array.from: 순회 기능 또는 유사 배열 개게에서 얕게 복사된 새로운 Array 인스턴스를 생성
*/


function solution(numbers) {
    const sums = new Set();
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sums.add(numbers[i] + numbers[j]);
        }
    }
    
    return Array.from(sums).sort((a, b) => a - b);
}