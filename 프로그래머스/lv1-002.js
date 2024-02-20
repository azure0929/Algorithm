// 해시 - 완주하지 못한 선수

// 참가자 배열과 완주자 배열을 비교해서 남는 배열 요소를 출력하면 해결
// 참여한 선수가의 수가 100,000명 이하로 주어진 것을 보아 시간 복잡도를 고려 필요
// 2중으로 for 문을 돌리면 시간초과에 걸림
// 배열을 상대로 sort() 함수를 호출하면 해당 배열 내의 값들이 오름차순으로 정렬됨
// sort() 함수는 원래 배열 내에 값들을 재배치하여 정렬한 배열을 다시 반환

function solution(participant, completion) {
  participant.sort(); // 참가자 배열 정렬
  completion.sort(); // 완주자 배열 정렬
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      // 인덱스 0부터 순차적으로 두 배열 비교
      return participant[i];
    }
  }
  // return answer;
}
