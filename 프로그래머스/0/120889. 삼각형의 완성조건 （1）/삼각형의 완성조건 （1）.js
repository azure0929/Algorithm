// 가장 긴 변의 길이 < 다른 두 변의 길이의 합
// 세 변으로 삼각형을 만들 수 있다면 1
// 만들 수 없다면 2를 return

function solution(sides) {
    // 배열을 정렬하여 가장 짧은 변과 가장 긴 변을 확인
    sides.sort((a, b) => a - b);
    // 세 변의 길이를 확인하여 삼각형의 완성 조건 검사
    const sumOf = sides[0] + sides[1];
    const long = sides[2];
    
    // 두 짧은 변의 합이 가장 가장 긴 변보다 크면 1을 반환
    if (sumOf > long) {
        return 1;
    }
    // 그렇지 않으면 2를 반환
    return 2;
}