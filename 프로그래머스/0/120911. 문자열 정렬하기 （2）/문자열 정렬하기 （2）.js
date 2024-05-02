// 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return
// toLowerCase : String 문자열을 소문자로 변환하여 반환
// split : 패턴 String을 사용하고 패턴을 검색하여 이 문자열을 순서가 지정된 하위 문자열 목록으로 나누고, 이러한 하위 문자열을 배열에 넣은 다음 배열을 반환
// sort
// -> 배열 Array의 요소를 제자리에 정렬하고 이제 정렬된 동일한 배열에 대한 참조를 반환. 기본 정렬 순서는 오름차순, 요소를 문자열로 변환한 다음 UIF-16 코드 단위 값의 순서를 비교하는 방식으로 구성됨

function solution(my_string) {
    return my_string.toLowerCase().split("").sort().join("");
}