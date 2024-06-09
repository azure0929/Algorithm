/**
* 자연수 n을 뒤집는다.
* String : 문자열의 생성자
* split : String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
* map : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
* reverse : 배열의 순서를 반전. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됨
*/

function solution(n) {
    return String(n).split('').map(Number).reverse();
}