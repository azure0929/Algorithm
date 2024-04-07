// 머쓱이가 갖고 있는 구슬의 개수 : balls
// 친구들에게 나누어 줄 구슬 개수 : share
// balls 개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return

// 서로 다른 구슬 3개 중 2개를 고르는 경우의 수 : 3
// 서로 다른 구슬 5개 중 3개를 고르는 경우의 수 : 10
// BigInt : Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 -1보다 큰 정수를 표현할 수 있는 내장 객체
//// 정수 리터럴의 뒤에 n을 붙이거나 10n 함수 BigInt()를 호출해 생성할 수 있음

function solution(balls, share) {
  let factorial = [BigInt(1)];
  for (let i = 1; i <= balls; i++) {
		factorial[i] = factorial[i - 1] * BigInt(i);
	}
  return factorial[balls] / (factorial[balls - share] * factorial[share]);
}