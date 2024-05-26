/**
* 두 이진수의 합을 return
* return 값 = 이진수
* BigInt : 정수를 표현하기 위한 것. 
* -> Javascript 기본 숫자 타입은 IEEE 754 부동 소수점 숫자이기 때문에, 정수 연산의 경우 일정 범위 이상의 값을 정확하게 표현할 수 있음
* -> 이러한 제한 없이 정수를 표현할 수 있음
* -> 숫자 끝에 'n'을 붙여서 표현
* -> 일반 숫자 간의 혼합 연산이 불가능
*/

function solution(bin1, bin2) {
    // 이진수 문자열을 BigInt로 변환하여 더한 후, 다시 이진수 문자열로 변환하여 반환
    return (BigInt('0b' + bin1) + BigInt('0b' + bin2)).toString(2);
}