// 스택/큐 - 프로세스

// ... : 전개 연산자, javascript에서 배열이나 함수 호출 시 사용되는 특별한 구문
// 예를 들어, [1,2,...[3,4],5]sms [1,2,3,4,5]로 펼쳐진다
// Math.max(...arr)와 같이 사용하면 배열 arr의 요소 중 가장 큰 값을 구할 수 있음
// ...을 사용하여 함수에 배열을 전달할 수 있음
// myFunction(...myArray)는 myArray의 각 요소를 개별적인 인수로 myFunction에 전달

// shift()는 javascript 배열 객체의 내장 함수 중 하나. 배열에서 첫 번째 요소를 제거하고 그 값을 반환. 제거된 요소로 인해 배열의 길이가 변하게 된다.

function solution(priorities, location) {
  let answer = 0;
  let arr = [];
  let max_value = Math.max(...priorities);

  // 위치 배열 만들기
  for (let i = 0; i < priorities.length; i++) {
    arr.push(i);
  }

  // priorities 배열이 비어있을 때까지 반복
  while (priorities.length != 0) {
    max_value = Math.max(...priorities);

    if (priorities[0] < max_value) {
      priorities.push(priorities.shift());
      arr.push(arr.shift());
    } else {
      answer += 1;
      priorities.shift();
      if (arr.shift() == location) return answer;
    }
  }
}
