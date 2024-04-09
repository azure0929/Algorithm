// 1번부터 던짐, 오른쪽으로 한 명을 건너뜀
// k번째로 공을 던지는 사람의 번호는 무엇인지 return

function solution(numbers, k) {
    let Ball = 1;
    for (let i = 0; i < k-1; i++) {
        Ball += 2;
        if (Ball > numbers.length) {
            Ball -= numbers.length;
        }
    }
    return Ball;
}