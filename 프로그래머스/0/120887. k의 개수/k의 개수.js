/**
* k가 몇 번 등장하는지 return
* RegExp : 문자열에서 특정 문자 조합을 찾기 위한 패턴
* match : 문자열이 정규식과 매치되는 부분을 검색
*/

function solution(i, j, k) {
    // 주어진 범위 내의 숫자들을 문자열로 만듬
    let numbers = '';
    
    for (let num = i; num <= j; num++) {
        numbers += num;
    }
    
    // 정규 표현식을 사용하여 특정 문자(k)의 등장 횟수를 셈
    const regex = new RegExp(k, 'g');
    const matches = numbers.match(regex);
    
    return matches ? matches.length : 0;
}