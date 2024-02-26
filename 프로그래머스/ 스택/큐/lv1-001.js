// 스택/큐 - 같은 숫자는 싫어

// solution 함수는 arr을 매개변수로 받음
// answer 변수는 입력된 배열 arr을 복사하여 참조
function solution(arr) {
  var answer = arr;
  let result = [];

  // for 반복문을 사용하여 'answer' 배열을 순회
  for (let i = 0; i < answer.length; i++) {
    // 각 요소를 현재 요소('answer[i]')와 다음 요소('answer[i + 1]')를 비교하여 중복 여부를 확인
    if (answer[i] !== answer[i + 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}
