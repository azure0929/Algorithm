// 오름차순 정렬한 리스트를 return
// charCodeAt : 문자열중 하나를 선택하여 아스키코드 번호로 변환해주는 함수

function solution(my_string) {
    return my_string
        .split("")
        .filter(char => char >= "0" && char <= "9") // 숫자 문자만 필터링
        .map(Number) // 숫자 문자들을 숫자로 반환
        .sort((a, b) => a - b); // 오름차순 정렬
}