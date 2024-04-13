// 자연수 n이 매개변수
// n의 소인수를 오름차순으로 담은 배열 return
// 자료구조 Set : 순서가 없는 중복되지 않은 데이터의 집합

function solution(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        // 배열을 돌면서 몫으로 나눴을 때 나머지가 0으로 떨어지는 것만 while문으로 arr 배열에 추가
        while (n % i === 0) {
            // 배열에 추가
            arr.push(i);
            // n의 값은 n/i로 변경
            n = n / i;
        }
    }
    
    // Set 기능을 사용해 중복을 제거한 집합으로 만들고 다시 배열로 풀어 넣음
    return [...new Set(arr)];
}