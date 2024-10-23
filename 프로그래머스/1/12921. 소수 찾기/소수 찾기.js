/**
* 에라토스테네스의 체
* n까지의 모든 소수를 한 번에 구하는 방식. 먼저 소수의 배수를 제거하여 소수를 찾음
* 시간 복잡도: O(n log log n) (매우 효율적이며, 특히 큰 n에 대해 성능이 뛰어남)
*/

function solution(n) {
    let sieve = Array(n + 1).fill(true); // 소수 여부를 저장하는 배열
    sieve[0] = sieve[1] = false; // 0과 1은 소수가 아니다.
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false; // j의 배수들은 소수가 아님
            }
        }
    }
    
    return sieve.filter(Boolean).length; // true로 남은 소수들의 개수
}