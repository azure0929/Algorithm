/**
* 문자열로 이루어진 배열 cards1, cards2
* 원하는 단어 배열 goal
* 한 장씩 사용
*/

function solution(cards1, cards2, goal) {
    let i = 0; // cards1의 포인터
    let j = 0; // cards2의 포인터
    
    
    for (const s of goal) {
        if (i < cards1.length && cards1[i] === s) {
            i++; // cards1에서 카드를 선택했을 때 포인터 증가
        } else if (j < cards2.length && cards2[j] === s) {
            j++; // cards2에서 카드를 선택했을 때 포인터 증가
        } else {
            return "No";
        }
    }
    
    return "Yes";
}