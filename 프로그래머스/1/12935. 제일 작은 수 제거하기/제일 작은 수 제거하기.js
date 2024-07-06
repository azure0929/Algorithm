/**
* 가장 작은 수를 제거한 배열을 return
* 빈 배열인 경우엔 배열에 -1을 채워 리턴
* reduce : 배열을 한 번 순회하면서 원하는 변형을 가하거나 새 값을 계산
*/

function solution(arr) {
    if (arr.length <= 1) {
        return [-1];
    }
    
    const min = Math.min(...arr); // 최솟값 찾기
    const result = []; // 새 배열 생성
    
    for (let num of arr) {
        if (num !== min) {
            result.push(num);
        }
    }
    
    return result;
}
