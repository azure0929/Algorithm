// 해독된 암호 문자열을 return

function solution(cipher, code) {
    // 결과 문자열을 저장할 변수
    let answer = '';
    // 초기 index 설정
    let i = code - 1;
    
    // 'i'가 'cipher'의 길이보다 적을 때까지 반복
    while (i < cipher.length) {
        // 현재 index의 문자 추가
        answer += cipher[i];
        // 다음 index로 이동
        i += code;
    }
    
    // 결과 문자열 반환
    return answer;
}