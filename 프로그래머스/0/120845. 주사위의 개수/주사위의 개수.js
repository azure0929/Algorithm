// 상자의 가로, 세로, 높이가 저장되어있는 배열 box
// 주사위 모서리의 길이 정수 n이 매개변수
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return
// box의 길이 : 3
// Math.trunc() : 주어진 값의 소수부분을 제거하고 숫자의 정수부분을 반환
//// Math.floor() : 내림, Math.round() : 반올림, Math.ceil() : 올림

function solution(box, n) {
    let result = 1;
    for (let i = 0; i < box.length; i++) {
        result *= Math.trunc(box[i] / n);
    }
    return result;
}