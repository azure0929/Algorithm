// 가장 큰 정수 i를 return
// 팩토리얼 : 1부터 어떤 양의 정수 n까지의 정수를 모두 곱한 것

function solution(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
        if (result <= n) answer = i;
    }
    
    return answer;
}