/**
* 나머지 숫자를 전부 *으로 가린 문자열을 return
*/

function solution(phone_number) {
    let len = phone_number.length;
    let answer = '';
    for (let i = 0; i < len - 4; i++) {
        answer += '*';
    }
    
    answer += phone_number.slice(-4);
    
    return answer;
}