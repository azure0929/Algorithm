/**
* 두 개 이상의 선분이 겹치는 부분의 길이를 return
* lines의 길이 = 3
* 주어진 선분을 객체로 표현
* 선분들을 시작 지점을 기준으로 정렬하여 겹치는 선분을 더 효율적으로 찾을 수 있음
* 겹치는 부분의 길이를 계산하기 위해 추가적인 데이터 구조를 사용
* for...of : 반복가능한 객체에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성
*/

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function solution(lines) {
  let answer = 0;
  // 선분 객체 정의
  const lineObjects = lines.map(line => new Line(line[0], line[1]));
  lineObjects.sort((a, b) => a.start - b.start); // 선분을 시작 지점을 기준으로 정렬

  // 선분의 시작과 끈 지점을 저장하는 배열
  let endPoints = [];
  for (let line of lineObjects) {
    // 시작과 끝 지점을 각각 배열에 저장
    endPoints.push({ point: line.start, type: 'start' });
    endPoints.push({ point: line.end, type: 'end' });
  }
  endPoints.sort((a, b) => a.point - b.point); // 선분의 시작과 끝 지점을 정렬

  // 현재 겹치는 선분의 개수
  let overlapCount = 0;
  // 이전 지점 초기화
  let prevPoint = endPoints[0].point;

  // 모든 지점에 대해 반복
  for (let i = 0; i < endPoints.length; i++) {
    // 현재 지점
    const currentPoint = endPoints[i].point;
    // 지점의 타입 (시작인지 끝인지)
    const type = endPoints[i].type;

    if (overlapCount > 1) {
      // 겹치는 선분이 있으면 현재 점과 이전 점 사이의 길이를 더함
      answer += currentPoint - prevPoint;
    }

    // 선분의 시작이면 겹치는 선분 개수 증가, 끝이면 감소
    if (type === 'start') {
      overlapCount++;
    } else {
      overlapCount--;
    }

    // 이전 지점 업데이트
    prevPoint = currentPoint;
  }

  return answer;
}