/**
* x의 자릿수의 합으로 x가 나누어져야 함
* x가 하샤드 수인지 아닌지 검사하는 함수를 완성
* Math.floor : 주어진 숫자를 내림하여 가장 가까운 정수를 반환
* 주어진 x를 변형하지 않고도 자릿수 합을 계산
* 반복문을 사용하여 x를 10으로 나누어 자릿수를 추출, 그 값을 sum에 더함
* 마지막에 원래의 x값으로 나머지 연산을 통해 하샤드 수 여부 판별
*/

function solution(x) {
    let sum = 0;
    // x의 복사본을 저장해둠
    let originalX = x;
    
    while (x > 0) {
        // 각 자릿수를 더함
        sum += x % 10;
        // 다음 자릿수로 이동
        x = Math.floor(x / 10);
    }
    
    return originalX % sum === 0;
}