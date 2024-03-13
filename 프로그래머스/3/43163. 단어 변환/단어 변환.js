// begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 함
// 단어의 집합 words가 매개변수로 주어짐
// 최소 몇 단계의 과정을 거치는지

function solution(begin, target, words) {
  // 각 단어의 방문 여부와 최단 거리를 저장하는 객체
  const visited = { [begin]: 0 };
  
  // BFS를 위한 큐 초기화
  const queue = [begin];

  // BFS 탐색 시작
  while (queue.length) {
    // 큐에서 현재 단어를 꺼냄
    const current = queue.shift();

    // 목표 단어에 도달하면 반복 종료
    if (current === target) break;

    // 현재 단어와 한 글자 차이나는 단어를 찾아서 큐에 추가
    for (const word of words) {
      if (isConnected(word, current) && visited[word] === undefined) {
        // 방문하지 않은 단어일 경우 최단 거리 갱신 및 큐에 추가
        visited[word] = visited[current] + 1;
        queue.push(word);
      }
    }
  }

  // 목표 단어에 도달한 경우 최단 거리 반환, 아닌 경우 0 반환
  return visited[target] !== undefined ? visited[target] : 0;
}

// 두 단어가 한 글자 차이나는지 확인하는 함수
const isConnected = (str1, str2) => {
  let differenceCount = 0;
  const len = str1.length;

  // 각 위치의 문자를 비교하여 차이가 있는지 확인
  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) differenceCount++;
  }

  // 두 단어의 차이가 한 글자인 경우 true 반환, 아닌 경우 false 반환
  return differenceCount === 1;
}