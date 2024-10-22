/**
* 시간 초과 문제
* 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게 return
* 무기의 공격력 1당 1kg의 철이 필요
* 에라토스테네스의 체: 소수를 판별하는 알고리즘.
* -> 가장 먼저 소수를 판별할 범위만큼 배열을 할당하며, 해당하는 값을 넣어주고, 이후에 하나씩 지워나가는 방법을 이용
*/

function solution(number, limit, power) {
    const divisorCount = new Array(number + 1).fill(0);
    
    // 모든 수의 약수 개수 계산
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisorCount[j]++;
        }
    }
    
    let res = 0;
    
    // 개선된 약수 개수를 이용하여 결과를 계산
    for (let i = 1; i <= number; i++) {
        const cnt = divisorCount[i];
        res += cnt > limit ? power : cnt;
    }
    
    return res;
}