/**
* 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return
* 문자 빈도수 비교 : 입력된 단어와 사전의 각 단어에서 각 문자의 빈도를 계산, 빈도가 같은지를 비교
*/

function solution(spell, dic) {
    // 문자의 빈도수를 계산하는 함수 정의
    function countCharacters(word) {
        const counts = {};
        // 단어의 각 문자를 순회하며 빈도수를 계산
        for (let char of word) {
            counts[char] = (counts[char] || 0) + 1;
        }
        return counts; // 문자 빈도수 객체 반환
    }
    
    // 입력된 단어의 문자 빈도수 계산
    const spellCounts = countCharacters(spell);
    
    // 사전의 각 단어에 대해 반복
    for (let word of dic) {
        // 현재 단어의 문자 빈도수 계산
        const wordCounts = countCharacters(word);
        
        // 두 단어의 빈도수가 같은지를 나타내는 플래그
        let isEqual = true;
        
        // 입력된 단어와 현재 사전 단어의 문자 빈도수 비교
        for (let char in spellCounts) {
            if (spellCounts[char] !== wordCounts[char]) {
                // 만약 빈ㄷ수가 다르다면 플래그를 false로 설정하고 반복 중단
                isEqual = false;
                break;
            }
        }
        
        // 모든 문자의 빈도수가 동일하다면 1을 반환하고 함수 종료
        if (isEqual) return 1;
    }
    
    // 사전에 주어진 단어가 없으면 2를 반환
    return 2;
}