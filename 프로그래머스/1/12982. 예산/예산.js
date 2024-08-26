/**
* 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 함
* 부서별로 신청한 금액이 들어있는 배열 d
* 예산 budget이 매개변수
* sort() : 배열의 요소를 문자열로 변환하여 정렬
* for...of 루프 : 배열의 각 요소를 순회하면서 작업을 수행
*/

function solution(d, budget) {
    // 1. 부서 비용을 오름차순으로 정렬
    d.sort((a, b) => a - b);
    
    // 2. 부서 비용을 추가하면서 예산을 초과하지 않는 최대 부서 수를 계산
    let total = 0;
    let count = 0;
    
    for (let cost of d) {
        if (total + cost <= budget) {
            total += cost;
            count++;
        } else {
            break;
        }
    }
    
    return count;
}