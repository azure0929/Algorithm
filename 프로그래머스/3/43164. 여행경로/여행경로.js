// 항상 'ICN' 공항에서 출발
// 2차원 배열 tickets가 매개변수로 주어짐
// 방문하는 공항 경로를 배열에 담아 return
// queue : 데이터를 임시적으로 쌓아 놓은 자료구조

function solution(tickets) {
  let answer = []; // 최종 답을 저장할 배열
  let correctCount = tickets.length; // 정확한 항공권 수

  let withICN = []; // "ICN"에서 출발하는 티켓 배열
  let withoutICN = []; // "ICN"에서 출발하지 않는 티켓 배열

  // "ICN"에서 출발하는 티켓과 그렇지 않은 티켓을 구분
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === "ICN") withICN.push(tickets[i]);
    else withoutICN.push(tickets[i]);
  }

  // "ICN"에서 출발하는 티켓들을 정렬하고, 나머지 티켓들도 정렬하여 합침
  tickets = [...withICN.sort(), ...withoutICN.sort()];

  // 너비 우선 탐색(BFS) 함수
  function bfs(i) {
    let visited = []; // 방문한 티켓들의 인덱스를 저장하는 배열
    let queue = []; // BFS를 위한 큐

    queue.push([tickets[i][1], [tickets[i][0]]]); // 큐에 첫 번째 출발지와 경로를 넣음
    visited.push([i]); // 출발 티켓의 인덱스를 방문 배열에 추가

    // BFS 탐색
    while (queue.length) {
      let current = queue.shift(); // 큐에서 현재 티켓과 경로를 가져옴
      let checkVisited = visited.shift(); // 방문 배열에서 해당 경로의 방문 기록을 가져옴

      // 모든 항공권을 사용하여 여행 경로가 완성된 경우
      if (current[1].length === correctCount) {
        // 해당 경로를 최종 답으로 설정하고 함수 종료
        return (answer = [...current[1], current[0]]);
      }

      // 모든 티켓을 순회하며 다음 여행지를 찾음
      tickets.forEach((ticket, index) => {
        // 이미 방문한 티켓은 건너뜀
        if (checkVisited.includes(index)) return;
        // 현재 공항에서 출발하는 티켓을 찾음
        if (ticket[0] === current[0]) {
          // 다음 여행지와 경로를 큐와 방문 배열에 추가
          queue.push([ticket[1], [...current[1], ticket[0]]]);
          visited.push([...checkVisited, index]);
        }
      });
    }
  }

  // 모든 티켓에서 시작하여 가능한 모든 여행 경로를 탐색
  for (let i = 0; i < tickets.length; i++) {
    // 이미 최종 답이 존재하면 함수 종료
    if (answer.length) {
      return answer;
    }
    // BFS 함수를 호출하여 여행 경로를 탐색
    bfs(i);
  }
}
