/**
* 발음할 수 있는 단어의 '개수'를 return
* 주어진 단어가 특정 문자열 패턴을 포함하는지 확인
* 연속으로 반복된 패턴 없이 구성된 경우에만 유효하게 판단하여 개수를 세는 문제
*/

function solution(babbling) {
    const can = ['aya', 'ye', 'woo', 'ma'];
    let count = 0;
    
    for (let i = 0; i < babbling.length; i++) {
        let babble = babbling[i];
        
        // 연속된 패턴이 있는지 확인
        for (let j = 0; j < can.length; j++) {
            if (babble.includes(can[j].repeat(2))) { // ex: "ayaaya"
                break; // 연속된 패턴이 있으면 유효하지 않으므로 중단
            }
            babble = babble.split(can[j]).join(" "); // 패턴을 공백으로 대체하여 제거
        }
        
        // 모든 패턴을 제거하고 나서 빈 문자열이면 유효한 단어로 카운트
        if (babble.split(" ").join("").length === 0) {
            count += 1;
        }
    }
    
    return count;
}