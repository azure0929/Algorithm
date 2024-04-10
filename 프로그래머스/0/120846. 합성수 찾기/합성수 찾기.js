// n 이하의 합성수의 개수를 return
// Math.sqrt() : 제곱근을 구한 후 소수 판별

function solution(n) {
  let arr = [];
  
  for (let i = 1; i <= n; i ++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        arr.push(i)
      }
    }
  }
   return [...new Set(arr)].length // 중복을 제외한 배열의 길이 반환
}