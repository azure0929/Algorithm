/**
* 'Kim'은 오직 한 번만 나타남
*/

function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            return `김서방은 ${i}에 있다`;
        }
    }
    
    return '김서방을 찾을 수 없습니다';
}