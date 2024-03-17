// 1개 이상의 정점
// 도넛, 막재, 8자
// 그래프를 Map 객체로 만들어 나가고 들어오는 간선 개수 체크
// 그래프 종류를 파악하기 위한 노드 특징 파악
// 파악한 특징을 바탕으로 조건문 분기 처리
// answer 리스트에 답 넣기

// 각 노드의 정보를 추적하고 있는 객체를 생성하고, 각 노드의 출발점과 도착점의 개수를 저장
const getInfo = (edges) => {
    // edges 배열을 reduce 함수를 사용하여 map으로 변환
    const info = edges.reduce((map, key) => {
        // 출발 노드가 map에 없는 경우
        if (!map.has(key[0])) {
            // 출발 노드를 key로 하여 [1, 0] 배열을 value로 map에 추가
            map.set(key[0], [1, 0]);
        } else {
            // 출발 노드가 이미 map에 있는 경우
            const [give, receive] = map.get(key[0]);
            // 출발 노드의 give 값을 1 증가시키고, receive 값은 유지
            map.set(key[0], [give + 1, receive]);
        }
        
        // 도착 노드가 map에 없는 경우
        if (!map.has(key[1])) {
            // 도착 노드를 key로 하여 [0, 1] 배열을 value로 map에 추가
            map.set(key[1], [0, 1]);
        } else {
            // 도착 노드가 이미 map에 있는 경우
            const [give, receive] = map.get(key[1]);
            // 도착 노드의 receive 값을 1 증가시키고, give 값은 유지
            map.set(key[1], [give, receive + 1]);
        }
        
        // 변환된 map을 반환
        return map;
    }, new Map());
    
    // 변환된 map을 반환
    return info;
}

// 각 노드의 정보를 분석하여 도넛과 막대 그래프를 분류하고, 그 결과를 반환
const chkInfo = (info) => {
    // 결과를 저장할 배열을 생성하고, 모두 0으로 초기화
    const res = new Array(4).fill(0);
    
    // info의 각 entry에 대해 반복
    for (const [key, io] of info) {
        // 각 노드의 give와 receive 값을 가져옵니다.
        const [give, receive] = io;
        // 도넛 그래프인 경우
        if (2 <= give && receive == 0) {
            // 결과 배열의 첫 번째 요소에 해당 노드 번호를 저장합니다.
            res[0] = key;
        } 
        // 막대 그래프인 경우
        else if (give == 0) {
            // 결과 배열의 세 번째 요소를 1 증가시킵니다.
            res[2]++;
        } 
        // 일반적인 그래프인 경우
        else if (give >= 2 && receive >= 2) {
            // 결과 배열의 네 번째 요소를 1 증가시킵니다.
            res[3]++;
        }
    }
    
    // 도넛 그래프가 있는 경우, 해당 노드의 give 값에서 막대 그래프와 일반적인 그래프의 개수를 뺀 값을 계산하여 결과 배열의 두 번째 요소에 저장
    res[1] = info.get(res[0])[0] - res[2] - res[3];
    
    // 결과 배열을 반환
    return res;
}

// 주어진 그래프의 정보를 분석하여 도넛과 막대 그래프를 확인하고, 결과를 반환
const solution = (edges) => {
    // getInfo 함수를 사용하여 그래프의 정보를 추출
    const mapInfo = getInfo(edges);
    // chkInfo 함수를 사용하여 그래프를 분석하고 결과를 얻음
    const answer = chkInfo(mapInfo);
    return answer;
}
