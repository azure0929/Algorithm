/**
* 원소 중 두 개를 곲해 만들 수 있는 최댓값을 return
* Infinity : 전역 속성은 무한대를 나타내는 숫자 값
* sort : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
* -> 정렬은 stable sort가 아닐 수 있음. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따름
* Math.max : 정적 매서드는 매개변수로 주어진 숫자 중 가장 큰 수를 반환, 매개변수가 없을 경우 -Infinity를 반환
* 방법 : 배열의 끝에서부터 두 개의 요소를 선택하여 곱함 -> 최댓값을 찾아야 함
* 최댓값은 초기에 음의 무한대로 설정되어 있음, 반복문을 통해 업데이트가 필요
*/

function solution(numbers) {
    // 주어진 배열을 오름차순으로 정렬
    numbers.sort((a, b) => a - b);
    
    // 배열의 가장 큰 수와 그 다음으로 큰 수를 곱한 결과를 반환
    return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
}