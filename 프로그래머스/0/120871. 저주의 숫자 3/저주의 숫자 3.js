/**
* 3x 마을에서 사용하는 숫자로 바꿔 return
* 3의 배수와 숫자 3을 사용하지 않음
* String : 이 전역 객체는 문자열의 생성자
* includes : 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 true 또는 false를 반환
* split : String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
* floor : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
*/

function solution(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || String(i).includes('3')) {
            n += 1;
        }
    }
    
    return n;
}