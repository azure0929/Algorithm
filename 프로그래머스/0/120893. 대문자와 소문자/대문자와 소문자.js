// 대문자는 소문자로 대문자로 변환한 문자열을 return
// toUpperCase : 문자열을 대문자로 변환해 반환
// toLowerCase : 문자열을 소문자로 변환해 반환

function solution(my_string) {
    // 결과를 담을 빈 배열 생성
    let arr = [];
    
    // for 문을 사용하여 문자열의 각 문자를 순회
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toUpperCase()) {
            arr.push(my_string[i].toLowerCase());
        } else {
            arr.push(my_string[i].toUpperCase());
        }
    } return arr.join("");
}