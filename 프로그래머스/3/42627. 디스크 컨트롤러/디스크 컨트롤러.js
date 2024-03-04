class Heap {
  constructor() {
    this.item = []; // heap을 저장할 배열
  }

  get length() {
    return this.item.length; // 배열의 길이 반환
  }

  get heap() {
    return this.item; // 배열 반환
  }

  getParent(index) {
    return Math.floor((index - 1) / 2); // 부모 노드 인덱스 반환
  }

  getLeftChild(index) {
    return index * 2 + 1; // 왼쪽 자식 노드 인덱스 반환
  }

  getRightChild(index) {
    return index * 2 + 2; // 오른쪽 자식 노드 인덱스 반환
  }

  swap(a, b) {
    // 배열 요소 교환
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // 노드 추가시 부모와 비교하며 올바른 위치로 이동시키는 메소드
  bubbleUp(index) {
    if (index < 0) return;

    const left = this.getLeftChild(index);
    const right = this.getRightChild(index);

    const swapChildren =
      this.item[right] && this.item[right][1] < this.item[left][1]
        ? right
        : left;
        
    if (this.item[swapChildren][1] < this.item[index][1]) {
      this.swap(swapChildren, index);
      this.bubbleUp(this.getParent(index));
    }
  }

  // 노드 삭제시 자식과 비교하며 올바른 위치로 이동시키는 메소드
  bubbleDown(index) {
    if(index > Math.floor(this.length / 2) - 1) return;

    const left = this.getLeftChild(index);
    const right = this.getRightChild(index);

    const swapChildren =
      this.item[right] && this.item[right][1] < this.item[left][1]
        ? right
        : left;

    if (this.item[swapChildren][1] < this.item[index][1]) {
      this.swap(swapChildren, index);
    } 

    this.bubbleDown(swapChildren);
  }

  // 루트 노드 삭제 후 heap 정렬하는 메소드
  shift() {
    this.swap(0, this.length - 1); // 루트 노드와 마지막 노드 교환
    const pop = this.item.pop(); // 루트 노드 추출
    this.bubbleDown(0); // heap 정렬
    return pop; // 추출한 루트 노드 반환
  }

  // 새로운 노드 추가 후 heap 정렬하는 메소드
  push(value) {
    this.item.push(value); // 새로운 노드 추가
    this.bubbleUp(this.getParent(this.length - 1)); // heap 정렬
  }
}

function solution(jobs) {

  const heap = new Heap(); // Heap 객체 생성
  
  const length = jobs.length; // 작업 수 저장
  let answer = 0; // 평균 시간 저장
  let time = 0; // 디스크 시간 초기화

  // 작업 요청 시간 순으로 정렬 후, 요청 시간을 처음 작업의 요청 시간으로 설정
  jobs = jobs
    .sort((a, b) => a[0] - b[0])
    .map((v, i, arr) => [v[0] - arr[0][0], v[1]]);

  // 작업이 남아있는 동안 반복
  while (jobs.length || heap.length) {
    
    // 디스크 시간과 작업 요청 시간이 같거나 이전인 작업을 heap에 추가
    while (jobs.length && jobs[0][0] <= time) {
      heap.push(jobs.shift()); // heap에 추가 후 정렬
    }

    // 만약 heap에 작업이 없으면, 다음 작업 요청 시간까지 기다린다
    if (!heap.length) {
      const newTime = jobs[0][0]; // 다음 작업 요청 시간
      while (jobs.length && jobs[0][0] === newTime) {
        heap.push(jobs.shift()); // heap에 추가 후 정렬
      }
      
      time = newTime; // 디스크 시간 갱신
    }

    // 가장 먼저 끝나는 작업을 꺼내어 실행
    const done = heap.shift(); // 실행한 작업 추출
    
    // 현재 작업의 소요 시간을 더하여 디스크 시간 갱신
    time += done[1];
    
    // 전체 작업 시간에 추가
    answer += time - done[0];
  }

  // 평균 시간 계산 후 반환
  return Math.floor(answer / length);
}
