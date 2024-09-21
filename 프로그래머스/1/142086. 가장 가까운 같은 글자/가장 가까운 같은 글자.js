/**
* 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶음
*/


function solution(s) {
    const ans = []; // 결과를 저장할 배열
    const lastIndex = {}; // 각 문자의 마지막 인덱스를 저장할 객체
    
    for (let i = 0; i < s.length; i++) {
        if (lastIndex[s[i]] === undefined) { // 문자가 처음 등장하는 경우
            ans.push(-1); // -1을 추가
        } else {
            ans.push(i - lastIndex[s[i]]); // 현재 인덱스와 마지막 인덱스의 차이를 계산하여 추가
        }
        lastIndex[s[i]] = i; // 현재 인덱스를 기록
    } 
    
    return ans; // 결고 배열 반환
}