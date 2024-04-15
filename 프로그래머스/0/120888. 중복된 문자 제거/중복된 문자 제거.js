// 하나의 문자만 남긴 문자열을 return

function solution(my_string) {
    // 배열로 반환된 중복 제거된 문자를 다시 하나의 문자열로 합쳐 반환
    return [...new Set(my_string)].join('');
}