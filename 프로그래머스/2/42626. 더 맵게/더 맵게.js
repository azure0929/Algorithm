// MinHeap 클래스 정의
class MinHeap {
  constructor() {
    // heap을 배열로 초기화
    this.heap = [];
  }

  // heap의 크기 반환
  size() {
    return this.heap.length;
  }
      
  // 값을 넣되, 오름차순으로 정렬함
  push(value) {
    // 값을 배열에 추가
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    // 부모 노드와 비교하여 올바른 위치에 삽입
    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
    ) {
      // 부모 노드와 위치를 교환
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  // 값을 빼되, 오름차순으로 정렬함
  pop() {
    // heap이 비어있으면 null 반환
    if (this.heap.length === 0) return null;
    // heap에 하나의 값만 있으면 해당 값을 반환하고 heap 비우기
    if (this.heap.length === 1) return this.heap.pop();

    // 최솟값 추출 후 반환
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    // 최소 힙 조건을 만족할 때까지 노드 위치 조정
    while (currentIndex * 2 + 1 < this.heap.length) {
      // 자식 노드 중 더 작은 값을 선택
      let minChildIndex = currentIndex * 2 + 2 < this.heap.length && this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1] ? currentIndex * 2 + 2 : currentIndex * 2 + 1;

      // 부모 노드보다 작은 자식 노드가 없으면 반복 종료
      if (this.heap[currentIndex] < this.heap[minChildIndex]) {
        break;
      }

      // 부모 노드와 자식 노드 위치 교환
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      currentIndex = minChildIndex;
    }

    return minValue;
  }

  // heap의 최솟값 반환
  peek() {
    return this.heap[0];
  }
}

// 주어진 스코빌 지수 배열과 목표 지수 K를 입력으로 받아 더 맵게 만들 수 있는 최소 횟수를 반환하는 함수
function solution(scoville, K) {
  // 최소 힙 생성
  const minHeap = new MinHeap();

  // 스코빌 지수를 최소 힙에 추가
  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0; // 섞은 횟수 초기화

  // 최소 힙의 크기가 2 이상이고, 최소 힙의 최솟값이 K 미만일 때 반복
  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    // 가장 작은 두 개의 원소를 추출하여 섞은 후 최소 힙에 추가
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedScov = first + second * 2;
    minHeap.push(mixedScov);
    mixedCount++; // 섞은 횟수 증가
  }

  // 최소 힙의 최솟값이 K 이상이면 섞은 횟수 반환, 아니면 -1 반환
  return minHeap.peek() >= K ? mixedCount : -1;
}
