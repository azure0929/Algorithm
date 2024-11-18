/**
* 휴대폰의 자판: 여러 개의 문자가 할당될 수 있음
* 특정 키를 눌렀을 때 입력되는 문자들도 무작위로 배열되어 있음
* 키를 최소 몇 번 눌러야 그 문자열을 작성할 수 있는지 알아보고자 함
* HashMap: 키와 값 쌍을 저장하는 자료 구조
* 각 키는 고유하며, 키를 사용하여 해당하는 값을 빠르게 검색할 수 있음
* 키를 주면 해싱 함수에 의해 해시코드로 변환, 해당 해시코드는 배열의 각 요소인, 버킷의 인덱스 역할
* 해당 버킷을 찾아가면 값을 삽입 및 조회할 수 있음
*/

function solution(keymap, targets) {
    // 해시 맵 생성
    const keyPressMap = {};
    
    // keymap을 순회하여 각 문자의 최소 입력 횟수 저장
    for (let key of keymap) {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            if (!keyPressMap[char] || keyPressMap[char] > i + 1) {
                keyPressMap[char] = i + 1;
            }
        }
    }
    
    // targets 순회하여 입력 횟수 계산
    const answer = targets.map((target) => {
        let pressCount = 0;
        
        for (let char of target) {
            if (!keyPressMap[char]) return -1; // 자판에 없는 문자일 경우
            pressCount += keyPressMap[char];
        }
        
        return pressCount;
    });
    
    return answer;
}