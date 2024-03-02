// 정렬 - H-Index

// H-지수 : 특정 연구원의 연구 성과를 평가하기 위한 지표, 발표한 논문수와 피인용수를 이용하여 보다 객관적으로 학문적 역량을 측정할 수 있음

function solution(citations) {
  // var answer = 0;
  // return answer;

  // citations 배열을 내림차순으로 정렬 : 논문의 인용 횟수를 큰 순서대로 정렬
  citations.sort((a, b) => b - a);

  // answers 변수를 초기화
  let answers = 0;
  // 배열을 순회하면서 다음 조건을 만족하는 경우에 'answer'를 증가
  for (let i = 0; i < citations.length; i++) {
    // 현재 인덱스 'i' 값보다 해당 인덱스의 논문 인용 횟수가 크거나 같을 때,
    // 최종적으로 계산된 answer를 반환
    if (i < citations[i]) {
      answers++;
    }
  }

  return answers;
}
