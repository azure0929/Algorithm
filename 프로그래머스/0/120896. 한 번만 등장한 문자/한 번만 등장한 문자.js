// 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return
// 0 < s의 길이 < 1,000
// indexOf : 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환
//// 일치하는 값이 없으면 -1을 반환
// lastIndexOf : 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색
//// 최초로 마주치는 인덱스를 반환. 일치하는 부분을 찾을 수 없다면 -1을 반환

function solution(s) {
    let answer = []; // 결과를 저장할 빈 배열을 초기화
    for (let i = 0; i < s.length; i++) { // 문자열 's'를 반복하면서 각 문자를 확인
        // 현재 문자 's[i]'가 문자열 's'에서 처음과 마지막으로 나타나는 위치가 같다면
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            answer.push(s[i]) // 'answer' 배열에 현재 문자를 추가
        }
    }
    
    // 'answer' 배열을 정렬하고 문자열로 결합하여 반환
    return answer.sort().join('');
}