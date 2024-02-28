// 스택/큐 - 주식가격

// 'price' 배열을 순회하면서 각 주식의 가격에 대해 떨어지지 않은 기간을 찾음
function solution(prices) {
  const answer = [];
  // 주식 가격 배열을 순회
  for (let i = 0; i < prices.length; i++) {
    let stack = 0;
    // 현재 주식 가격과 이후의 가격을 비교
    for (let j = i + 1; j < prices.length; j++) {
      stack++;
      // 현재 주식 가격보다 이후의 가격이 작으면 break
      if (prices[i] > prices[j]) {
        break;
      }
    }
    // 각 주식에 대한 결과를 answer 배열에 추가
    answer.push(stack);
  }
  return answer;
}
