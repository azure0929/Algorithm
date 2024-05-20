/**
* n으로 부터 가까운 순서대로 정렬한 배열을 return
* reduce : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행, 하나의 결과값을 반환
* abs : 주어진 숫자의 절대값을 반환. x가 양수이거나 0이라면 x를 리턴, x가 음수라면 x의 반대값, 즉 양수를 반환
* sort : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
*/

function solution(numlist, n) {
    // 숫자와 해당 숫자의 n으로부터의 거리를 매핑하는 객체 생성
    const distanceMap = numlist.reduce((map, num) => {
        map[num] = Math.abs(num - n);
        return map;
    }, {});
    
    // 거리에 따라 숫자 배열 정렬
    numlist.sort((a, b) => {
        // 거리가 같은 경우 큰 수가 앞에 오도록 정렬
        if (distanceMap[a] === distanceMap[b]) {
            return b - a;
        }
        
        // 그렇지 않은 경우 거리가 가까운 순으로 정렬
        return distanceMap[a] - distanceMap[b];
    });
    
    return numlist;
}