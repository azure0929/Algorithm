// 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return
// 1 < my_string의 길이 < 100
// splice : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
// split : 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나누는 메서드

function solution(my_string, num1, num2) {
    // 문자열을 배열로 변환
    let splitArr = my_string.split('');
    
    // num1과 num2 인덱스의 문자를 교환
    // num1 인덱스의 문자를 교체
    splitArr.splice(num1, 1, my_string[num2]);
    
    // num2 인덱스의 문자를 교체
    splitArr.splice(num2, 1, my_string[num1]);
    
    // 교환된 배열을 다시 문자열로 결합하고 반환
    return splitArr.join('');
}