// 정렬 - 가장 큰 수

// 숫자를 모두 스트링으로 만든 후, 해당 수와 다음 수를 이어 붙였을 때 더 큰 순서대로 정렬해준 뒤 이어붙여주어야 함
// numbers 배열의 각 숫자를 문자열로 변환

function solution(numbers) {
  const answer = numbers
    // map 함수를 사용. 각 원소를 'toString' 메서드를 통해 문자열로 변환
    .map((number) => number.toString())
    // 변환된 문자열들을 내림차순으로 정렬
    // sort 함수 : 비교 함수, 두 문자열을 결합하여 비교 + 그 결과에 따라 정렬이 이루어짐
    .sort((a, b) => b + a - (a + b))
    // join 메서드를 사용하여 하나의 문자열로 합침
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
