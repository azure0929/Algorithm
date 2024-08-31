/**
* 앞뒤로 뒤집은 후, 다시 10진법으로 표현수를 return
* Math.floor : 항상 소수점을 내림하여 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환
* parseInt : 문자열 인수를 구문 부석하고 지정된 진법의 정수를 반환
* split : 패턴 String을 받아서 패턴을 검색하여 문자열을 정렬된 부분 문자열 목록으로 나누고,
* 이 부분 문자열을 배열에 넣은 다음, 배열을 반환
*/

function solution(n) {
    let result = "";
    let number = n;
    
    // 3진법으로 변환
    while (number > 0) {
        result = (number % 3) + result;
        number = Math.floor(number / 3);
    }
    
    // 3진법 문자열 뒤집기
    result = result.split("").reverse().join("");
    
    // 뒤집은 3진법 문자열을 다시 10진법으로 변환
    return parseInt(result, 3);
}
