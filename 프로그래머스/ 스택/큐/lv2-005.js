// 스택/큐 - 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  // answer변수 : 트럭이 다리를 건너는 데 걸리는 총 시간을 저장
  let answer = 0;

  // bridge 배열 : 현재 다리 위에 있는 트럭들
  let bridge = [];
  // bridge_weight 변수 : 현재 다리 위에 있는 트럭들의 무게의 합
  let bridge_weight = 0;
  // while : 아직 모든 트럭이 다리를 건너지 않았다면 반복함
  while (truck_weights.length > 0) {
    answer++;
    // 다리 위에 트럭이 다 찼으면, 가장 처음에 들어간 트럭을 빼고 그 무게를 'bridge_weight'에서 뺌
    if (bridge.length == bridge_length) {
      bridge_weight -= bridge.shift();
    }
    // 다음에 들어갈 트럭의 무게와 현재 다리 위의 트럭들의 무게의 합이 다리가 견딜 수 있는 최대 무게를 초과하면,
    // 0의 무게를 가진 트럭을 다리에 추가하고 반복문의 처음으로 돌아감
    if (bridge_weight + truck_weights[0] > weight) {
      bridge.push(0);
      continue;
    }
    // 트럭 배열에서 다리에 올라갈 트럭의 무게를 꺼내옴
    let truck_weight = truck_weights.shift();
    // 다리에 트럭을 추가하고, 해당 트럭의 무게를 'bridge_weight'에 더함
    bridge.push(truck_weight);
    bridge_weight += truck_weight;
  }

  // 모든 트럭이 다리를 건널 때까지의 시간에, 마지막 트럭이 다리에서 빠져나가는 시간을 더함
  answer += bridge_length;

  return answer;
}
