// 모음을 제거한 문자열을 return
// 정규 표현식 : 슬래시로 패턴을 감싸서 작성
// replace() : 바꿀 문자열을 직접 입력하거나 정규표현식을 사용

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, "");
}