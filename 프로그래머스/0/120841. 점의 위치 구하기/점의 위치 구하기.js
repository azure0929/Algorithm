// 1부터 4까지 번호를 매김

function solution(dot) {
    const [x, y] = dot;
    
    if (x > 0) {
        if (y > 0) {
            return 1; // 1사분면
        } else if (y < 0) {
            return 4; // 4사분면
        }
    } else if (x < 0) {
        if (y > 0) {
            return 2; // 2사분면
        } else if (y < 0) {
            return 3; // 3사분면
        }
    }
    
    return null; // 원점에 위치하는 경우
}