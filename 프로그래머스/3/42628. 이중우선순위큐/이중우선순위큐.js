class MinHeap {
    constructor() {
        this.heap = [null]; // 인덱스 0은 사용하지 않고 1부터 사용하는 최소 힙 배열
    }
    
    // 값을 heap에 추가하는 메서드
    push(val) {
        this.heap.push(val); // heap 배열에 값을 추가
        let currentIndex = this.heap.length - 1; // 추가된 값의 현재 인덱스
        let parentIndex = Math.floor(currentIndex / 2); // 추가된 값의 부모 인덱스
        
        // 부모 노드와 비교하여 올바른 위치로 이동시키는 과정
        while (parentIndex !== 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this._swap(currentIndex, parentIndex); // 부모 노드와 현재 노드를 교환
            currentIndex = parentIndex; // 현재 인덱스를 부모 인덱스로 변경
            parentIndex = Math.floor(currentIndex / 2); // 새로운 부모 인덱스 계산
        }
    }
    
    // heap에서 값을 추출하는 메서드
    pop(isTopPop) {
        if (this.isEmpty()) return; // heap이 비어있으면 종료
        if (this.heap.length === 2) return this.heap.pop(); // heap에 원소가 하나만 있을 경우 해당 원소 추출
        
        // 최상위 노드가 아닌 경우 (최솟값이 아닌 값을 pop할 경우)
        if (!isTopPop) {
            // 마지막 leaf의 부모 인덱스와 leaf 노드들을 추출하여 최댓값을 찾고 그 값과 마지막 노드를 교환
            const parentIndex = Math.floor((this.heap.length - 1) / 2);
            const lastLeaf = this.heap.slice(parentIndex);
            const max = Math.max(...lastLeaf);
            this._swap(parentIndex + lastLeaf.indexOf(max), this.heap.length - 1);
            return this.heap.pop(); // 최댓값을 추출하여 반환
        }
        
        // 최상위 노드를 추출하는 경우
        const val = this.heap[1]; // 최소값 추출
        this.heap[1] = this.heap.pop(); // 최하위 노드를 최상위 노드로 이동
        let currentIndex = 1; // 현재 노드 인덱스 초기화
        let leftIndex = 2; // 왼쪽 자식 노드 인덱스
        let rightIndex = 3; // 오른쪽 자식 노드 인덱스
        
        // 최상위 노드부터 자식 노드와 비교하며 올바른 위치로 이동시키는 과정
        while (
            this.heap[leftIndex] && this.heap[currentIndex] > this.heap[leftIndex] ||
            this.heap[rightIndex] && this.heap[currentIndex] > this.heap[rightIndex] 
        ) {
            if (this.heap[leftIndex] === undefined) {
                this._swap(rightIndex, currentIndex);
            } else if (this.heap[rightIndex] === undefined) {
                this._swap(leftIndex, currentIndex);
            } else if (this.heap[leftIndex] > this.heap[rightIndex]) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            } else if (this.heap[leftIndex] <= this.heap[rightIndex]) {
                this._swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            }
            
            leftIndex = currentIndex * 2; // 왼쪽 자식 노드 인덱스 재계산
            rightIndex = currentIndex * 2 + 1; // 오른쪽 자식 노드 인덱스 재계산
        }
        
        return val; // 추출한 최소값 반환
    }
    
    // heap이 비어있는지 확인하는 메서드
    isEmpty() {
        return this.heap.length === 1; // heap 배열의 길이가 1인 경우에만 비어있는 것으로 간주
    }
    
    // heap의 최솟값과 최댓값을 반환하는 메서드
    result() {
        if (this.heap.length === 1) return [0, 0]; // heap이 비어있을 경우 [0, 0] 반환
        if (this.heap.length === 2) return [this.heap[1], this.heap[1]]; // heap에 원소가 하나만 있는 경우 해당 원소를 최솟값과 최댓값으로 반환
        
        // 마지막 leaf의 부모 인덱스와 leaf 노드들을 추출하여 최댓값을 찾음
        const parentIndex = Math.floor((this.heap.length - 1) / 2);
        const lastLeaf = this.heap.slice(parentIndex);
        const max = Math.max(...lastLeaf);
        return [max, this.heap[1]]; // 최댓값과 최소값 반환
    }
    
    // 배열 내 두 요소의 위치를 교환하는 메서드
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]; // 배열 내 두 요소의 위치를 교환
    }
}

// 주어진 operations 배열에 따라 최소 힙을 구현하여 최솟값과 최댓값을 반환하는 함수
function solution(operations) {
    const minHeap = new MinHeap(); // 최소 힙 객체 생성
    
    // 주어진 operations 배열 순회
    operations.forEach((operation) => {
        const [type, val] = operation.split(" ").map((v, i) => i === 1 ? Number(v) : v); // 문자열을 공백을 기준으로 분리하여 연산 타입과 값 추출
        if (type === "I") { // 연산 타입이 "I" (Insert)인 경우
            minHeap.push(val); // 최소 힙에 값 추가
        } else { // 연산 타입이 "D" (Delete)인 경우
            minHeap.pop(val < 0); // 최소 힙에서 값을 추출하여 삭제 (값이 음수이면 최솟값 삭제)
        }
    });
    return minHeap.result(); // 최솟값과 최댓값 반환
}
