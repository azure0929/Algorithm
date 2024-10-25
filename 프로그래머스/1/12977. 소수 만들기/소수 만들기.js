/**
* 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 
* 숫자의 개수: 3개 이상 50개 이하
* 중복x
*/

function solution(nums) {
    // 배열에서 최대 세 수의 합까지 소수를 판별하기 위해 필요한 최대값 구하기
    const maxNumber = Math.max(...nums) * 3;

    // 에라토스테네스의 체를 통해 소수 여부를 판별하기 위한 배열 초기화
    const isPrime = Array(maxNumber + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    // 에라토스테네스의 체 알고리즘으로 소수 판별 배열 생성
    for (let i = 2; i * i <= maxNumber; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= maxNumber; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    // 조합을 사용해 3개의 숫자를 선택하여 합이 소수인지 판별
    let answer = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime[sum]) answer++;
            }
        }
    }
    
    return answer;
}