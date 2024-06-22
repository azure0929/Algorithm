/**
* x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return
* apply() : 주어진 function 값으로 이 함수를 호출하고, this 배열 arguments로 제공
*/

function solution(n) {
    let arr = [];
    let i = n * 2;
    while (i >= 1) {
        if (n % i === 1) {
            arr.push(i);
        }
        
        i--;
    }
    
    const x = Math.min.apply(null, arr); // 배열에서 가장 작은 값을 찾음
    return x; // 가장 작은 값을 반환
}