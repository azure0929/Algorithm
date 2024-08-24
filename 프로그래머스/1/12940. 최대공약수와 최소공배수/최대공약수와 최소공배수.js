/**
* 유클리드 호제법의 기본 원리
* 최대공약수(GCD)
* -> 'greatest' 함수는 유클리드 호제법을 사용하여 두 수의 최대공약수를 계산.
* -> 기본 사례로 'b'가 0일 때 'a'가 최대공약수
* 최소공배수(LCM)
* -> 'least' 함수는 GCD와 LCM의 관계를 이용하여 최소공배수를 계산
*/

function solution(n, m) {
    var answer = [];
    
    // 두 수의 최대공약수를 재귀적으로 계산하는 함수
    const greatest = (a, b) => {
        if (b === 0) return a; // b가 0이면 a가 최대공약수
        return greatest(b, a % b);
    }
    
    // 최대공약수를 사용하여 두 수의 최소공배수를 계산하는 함수
    const least = (a, b) => (a * b) / greatest(a, b);
    
    return [greatest(n, m), least(n, m)]; // 최대공약수와 최소공배수를 배열로 반환
}