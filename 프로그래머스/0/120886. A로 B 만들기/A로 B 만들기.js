/**
* 만들 수 있으면 1, 없으면 0 return
* 문자 카운트 비교 : 각 문자의 개수를 셈. 만약 두 문자열의 각 문자 개수가 동일하다면, 두 문자열은 같은 문자로 이루어져 있음
*/

function solution (before, after) {
    // 입력 문자열의 길이가 다르면 두 문자열은 서로 다르다고 판단하고 0을 반환
    if (before.length !== after.length) return 0;
    
    // 각 문자의 개수를 저장할 객체를 생성
    const countBefore = {};
    const countAfter = {};
    
    // 입력 문자열 'before'의 각 문자의 개수를 카운트하여 객체에 저장
    for (let char of before) {
        countBefore[char] = (countBefore[char] || 0) + 1;
    }
    
    // 입력 문자열 'after'의 각 문자의 개수를 카운트하여 객체에 저장
    for (let char of after) {
        countAfter[char] = (countAfter[char] || 0) + 1;
    }
    
    // 'before'와 'after'의 각 문자의 개수를 비교하여 다르면 0을 반환
    for (let char in countBefore) {
        if (countBefore[char] !== countAfter[char]) return 0;
    }
    
    // 모든 검사를 통과하면 두 문자열은 같다고 판단하고 1을 반환
    return 1;
}