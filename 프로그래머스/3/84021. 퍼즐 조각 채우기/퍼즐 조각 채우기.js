// 모두 각 칸이 1x1 크기인 정사각 격자 모양
// 한 번에 하나씩 채워 넣음

const dy = [1,-1,0,0]; // 상하좌우 이동을 위한 y 방향 배열
const dx = [0,0,1,-1]; // 상하좌우 이동을 위한 x 방향 배열

// 조각의 좌표를 정렬하여 좌상단을 (0,0)으로 옮기는 함수
const Mapping = (list) => {
    let minY = Number.MAX_VALUE;
    let minX = Number.MAX_VALUE;
    for(let arr of list) {
      minY = Math.min(minY, arr[0]);
      minX = Math.min(minX, arr[1]);
    }
    return list.map((arr)=> [arr[0]-minY,arr[1]-minX]);
};

// BFS를 통해 조각의 좌표를 탐색하는 함수
const BFS = (visit, table, y, x, N, stand) => {
    const q = [];
    const list = [];
    q.push([y,x]);
    visit[y][x] = true;
    while(q.length !== 0) {
        let [i, j] = q.shift();
        list.push([i,j]);
        for(let d=0; d<4; d++) {
            let ny = i + dy[d];
            let nx = j + dx[d];
            // 보드를 벗어나지 않도록 검사
            if(ny<0||nx<0||ny>=N||nx>=N)
                continue;
            // 이미 방문한 좌표인지 검사
            if(visit[ny][nx])
                continue;
            // 현재 조각과 같은 모양이 아닌 경우 검사
            if(table[ny][nx] === stand)
                continue;
            visit[ny][nx] = true;
            q.push([ny,nx]);
        }
    }
    return Mapping(list); // 조각의 좌표를 정렬하여 반환
};

// 테이블 또는 게임 보드의 모든 조각을 추출하는 함수
const TableInit = (table, stand) => {
    let N = table.length;
    let list = [];
    let visit = Array.from({length: N}, () => Array(N).fill(false));

    for(let i=0; i<N; i++) {
        for(let j=0;j<N; j++) {
            // 이미 방문한 좌표인지 또는 현재 모양과 다른 모양인지 검사
            if(visit[i][j])
                continue;
            if(table[i][j] === stand)
                continue;
            list.push(BFS(visit, table, i, j, N, stand)); // BFS를 통해 조각 좌표 탐색
        }
    }

    return list; // 모든 조각의 좌표를 반환
};

// 두 조각이 같은 모양인지 확인하는 함수
const CheckComp = (stand, comp) => {
    let N = comp.length;
    for(let i=0;i<N;i++) {
        let check = false;
        for(let j=0;j<N;j++){
            if(stand[i][0] === comp[j][0] && stand[i][1] === comp[j][1]) {
                check = true;
                break;
            }
        }
        if(!check)
            return false;
    }
    return true;
};

// 빈 공간과 조각이 일치하는지 확인하는 함수
const checkCounting = (stand, comp) => {
    if(stand.length !== comp.length )
        return false;

    let MaxY = -1;
    let MaxX = -1;

    comp.forEach((arr) => {
        MaxY = Math.max(MaxY,arr[0]);
        MaxX = Math.max(MaxX,arr[1]);
    });
    for(let d=0;d<4;d++) {
        if(CheckComp(stand, comp)){
            return true;
        }

        // 조각을 회전 및 반전하여 다시 확인
        comp = comp.map((arr) => [arr[1],MaxY-arr[0]]);
        [MaxY, MaxX] = [MaxX, MaxY];
    }

    return false;
};

// 가장 많은 조각을 맞추는 함수
const getMaxCount = (gameList, tableList) => {
    const N = tableList.length;
    const check = Array(N).fill(false);
    let count = 0;
    gameList.forEach((arr)=> {
       for(let i=0;i<N;i++){
           if(check[i])
               continue;
           if(checkCounting(arr,tableList[i])){
               check[i] = true;
               count+= arr.length;
               break;
           }
       } 
    });
    return count;
};

// 주어진 게임 보드와 테이블에 대해 최대 조각을 맞추는 함수
function solution(game_board, table) {
    const tableList = TableInit(table, 0); // 테이블의 모든 조각 추출
    const gameList = TableInit(game_board, 1); // 게임 보드의 모든 조각 추출
    return getMaxCount(gameList, tableList); // 가장 많은 조각을 맞춘 개수 반환
}
