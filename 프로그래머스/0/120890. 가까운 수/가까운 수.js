// n과 가장 가까운 수를 return
// 'array'를 순회하면서 각 요소와 'n'의 차이를 계산, 가장 작은 차이를 갖는 요소를 찾음
// 첫 번째 요소를 초기 'closest' 값으로 설정
// 현재 요소가 더 가깝거나 같은 차이를 갖지만 값이 더 작다면 'closest'를 업데이트
// 루프를 마치면 'closest'에 'n'에 가장 가까운 수가 저장되어 있으며 이를 반환
// Math.abs : 숫자의 절대값을 반환

function solution(array, n) {
    // 'array'에서 'n'에 가장 가까운 수를 찾기 위해 초기 'closest'를 첫 번째 요소를 설정
    let closest = array[0];
    // 'n'과 'closest'의 차이의 절대값을 초기 최소 차이로 설정
    let min = Math.abs(n - closest);
    
    // 'array'의 각 요소에 대해 반복
    for (let value of array) {
        // 'n'과 현재 요소 'value'의 차이의 절대값을 계산
        let differ = Math.abs(n - value);
        // 현재 요소가 더 가까운 거리를 가지거나, 같은 거리에서 값이 더 작은 경우
        if (differ < min || (differ === min && value < closest)) {
            // 'closest'와 'min'을 현재 요소 'value'와 그 차이로 업데이트
            closest = value;
            min = differ;
        }
    }
    
    // 'n'에 가장 가까운 수인 'closest'를 반환
    return closest;
}