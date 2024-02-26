// 스택/큐 - 기능개발

// ceil : 올림함수

// solution 함수는 progresses와 speeds 두 개의 배열을 매개변수로 받음
function solution(progresses, speeds) {
  // [] 배열은 각 날짜마다 완료된 작업의 수를 저장
  let answer = [];
  // 'progresses' 배열의 각 요소에 대해 'map'함수를 사용하여 해당 작업이 완료되기까지 걸리는 일수를 계산함
  let days = progresses.map((progresses, idx) =>
    Math.ceil((100 - progresses) / speeds[idx])
  );

  // 'cnt' 변수를 1로 초기화. 하루에 완료된 작업의 수를 세는 데 사용
  let cnt = 1;
  // 'maxDay' 변수를 'days' 배열의 첫 번째 요소로 초기화함. 이 변수는 현재까지 확인한 작업들 중에서 가장 오래 걸리는 일수
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    // 각 작업의 소요 일수('days[i]')가 현재까지 확인한 작업들 중 가장 오래 걸린 일수('maxDay')보다 작거나 같은 경우, 'cnt' 값을 증가시킴
    if (days[i] <= maxDay) {
      cnt++;
    } else {
      maxDay = days[i];
      answer.push(cnt);
      cnt = 1;
    }
  }

  answer.push(cnt);
  return answer;
}
