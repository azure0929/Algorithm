/**
* 7이 총 몇 개 있는지 return
* Join : 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환. 배열에 항목이 하나만 있는 경우, 해당 항목은 구분 기호를 사용하지 않고 반환
* split : String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
* match : 문자열이 정규식과 매치되는 부분을 검색
* 정규표현식 : /7/g
*/ 

function solution(array) {
    // 배열을 하나의 문자열로 결합 -> 해당 문자열에서 정규 표현식 '/7/g'에 일치하는 모든 문자를 찾음 -> 찾은 일치 항목의 배열의 길이를 반환
    return (array.join("").match(/7/g) || []).length;
}