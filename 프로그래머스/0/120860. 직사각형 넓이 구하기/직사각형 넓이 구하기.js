// 직사각형의 넓이를 return
// Math.max : 이 정적 메서드는 매개변수로 주어진 숫자 중 가장 큰 수를 반환. 매개변수가 없을 경우 Infinity를 반환
// Math.min : 주어진 숫자들 중 가장 작은 값을 반환
// map : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열에 반환

function solution(dots) {
    // 점들의 좌표를 이용하여 각 변의 길이를 계산
    let leftX = Math.min(...dots.map(a => a[0]));
    let rightX = Math.max(...dots.map(a => a[0]));
    let topY = Math.max(...dots.map(a => a[1]));
    let bottomY = Math.min(...dots.map(a => a[1]));
    
    // 상화좌우 변의 길이를 이용하여 넓이 계산
    let width = rightX - leftX;
    let height = topY - bottomY;
    
    // 넓이 반환
    return width * height;
}