// 정렬 - K번째 수

function solution(array, commands) {
  // 빈 배열에 answer를 선언
  let answer = [];

  // 'commands' 배열을 순회하면서 각 명령어에 대한 처리 수행
  for (var i = 0; i < commands.length; i++) {
    // 현재 명령어에 해당하는 부분 배열을 'array'에서 추출
    // 이때, 'slice' 메서드를 사용하여 시작 인덱스('command[i][0] - 1')부터 종료 인덱스('commands[i][1]')까지의 부분 배열을 생성
    var list = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
      return a - b;
    });

    answer.push(list[commands[i][2] - 1]);
  }

  return answer;
}
