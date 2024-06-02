/**
* 같으면 true, 다르면 false
* 모두 하나도 없는 경우는 항상 true
* 대문자와 소문자는 구별하지 않음
* s의 길이 : 50 이하의 자연수
* s : 알파벳으로만 이루어져 있음
* match : 문자열이 정규식과 매치되는 부분을 검색
*/

function solution(s) {
    // 'p'를 대소문자 구분 없이 모두 찾아 배열로 반환, 배열의 길이를 pCount 변수에 할당
    const pCount = (s.match(/p/ig) || []).length;
    
    // 'y'를 대소문자 구분 없이 모두 찾아 배열로 반환, 배열의 길이를 yCount 변수에 할당
    const yCount = (s.match(/y/ig) || []).length;
    
    // pCount와 yCount가 서로 같은지를 비교하여 결과를 반환
    
    return pCount === yCount;
}