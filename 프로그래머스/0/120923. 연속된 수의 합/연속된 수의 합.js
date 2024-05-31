/**
* 정수 배열을 오름차순으로 담아 return
* Math.ceil : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer로 반환
*/

function solution(num, total) {
    // 시작 숫자를 계산
    const start = Math.ceil((2 * total / num - (num - 1)) / 2);
    
    let answer = [];
    
    // 시작 숫자부터 num만큼의 연속된 수를 배열에 추가
    for (let i = 0; i < num; i++) {
        answer.push(start + i);
    }
    
    return answer;
}