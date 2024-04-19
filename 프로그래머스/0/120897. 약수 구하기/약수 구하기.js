// n의 약수를 오름차순으로 담은 배열을 return
// 1부터 'sqrt(n)' (n의 제곱근)까지 검사하고, 해당 수가 'n'의 약수라면 'n'을 나눈 몫도 약수라는 점을 이용
// Math.floor : 항상 반올림하여 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환
// Math.sqrt : 숫자의 제곱근을 반환

function solution(n) {
    let arr = [];
    let limit = Math.floor(Math.sqrt(n));
    
    for (let i = 0; i <= limit; i++) {
        if (n % i === 0) {
            arr.push(i); // i는 약수이므로 배열에 추가
            if (i !== n / i) {
                arr.push(n / i); // i가 n의 제곱근이 아니라면, n / i도 약수이므로 배열에 추가
            }
        }
    }
    
    // 배열을 정렬하여 약수들이 순서대로 배열에 들어가게 한다.
    arr.sort((a, b) => a - b);
    return arr;
}