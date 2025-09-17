/**
* 순서대로 n개의 퍼즐 풀어야 한다.
* 각 퍼즐: 난이도와 소요 시간이 정해져 있다.
* 숙련도에 따라 퍼즐을 풀 때 틀리는 횟수가 바뀌게 된다.
* 퍼즐의 난이도: diff
* 현재 퍼즐의 소요 시간: time_cur
* 이전 퍼즐의 소요 시간: time_prev
* 당신의 숙련도: level
* if (diff <= level): 틀리지 않고 time_cur만큼의 시간을 사용하여 해결
* if (diff > level): 퍼즐을 총 (diff - level)번 틀릴 때마다,
* time_cur만큼의 시간을 사용하며, 추가로 time_prev만큼의 시간을 사용해 이전 퍼즐을 다시 풀고 와야 함.
* 자바스크립트에서 안전하게 쓰려면 BigInt를 써야 한다.
* 그리고, 비교 시도(<=)에서도 BigInt와 Number 혼용 불가하므로 통일
*/

function solution(diffs, times, limit) {
  // 안전하게 최대 난이도 구하기 (spread 대신 루프)
  let maxDiff = 0;
  for (let d of diffs) if (d > maxDiff) maxDiff = d;

  // --- 1) BigInt 방식 시도 (환경이 지원하면 정확하고 안전) ---
  if (typeof BigInt !== 'undefined') {
    try {
      const n = diffs.length;
      const bigDiffs = diffs.map(d => BigInt(d));
      const bigTimes = times.map(t => BigInt(t));
      const bigLimit = BigInt(limit);

      function getTotalTimeBig(level) {
        let total = 0n;
        const L = BigInt(level);
        for (let i = 0; i < n; i++) {
          const diff = bigDiffs[i];
          const cur = bigTimes[i];
          const prev = i === 0 ? 0n : bigTimes[i - 1];
          if (diff <= L) {
            total += cur;
          } else {
            const mistakes = diff - L; // BigInt
            total += cur + mistakes * (cur + prev);
          }
          if (total > bigLimit) return total; // 가지치기
        }
        return total;
      }

      let left = 1;
      let right = maxDiff;
      let answer = right;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (getTotalTimeBig(mid) <= bigLimit) {
          answer = mid;
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      return answer;
    } catch (e) {
    }
  }

  // --- 2) BigInt가 없거나 에러났을 때: 오버플로우 방지한 Number 방식 ---
  const n = diffs.length;
  function getTotalTimeSafe(level) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      const diff = diffs[i];
      const cur = times[i];
      const prev = i === 0 ? 0 : times[i - 1];

      if (diff <= level) {
        total += cur;
        if (total > limit) return limit + 1; // 초과하면 바로 반환
      } else {
        const mistakes = diff - level;

        // 필요한 추가시간 = cur + mistakes * (cur + prev)
        // -> 직접 곱셈하기 전에 'rem'로 가능한 최대 mistakes 확인 (오버플로우 방지)
        const rem = limit - total - cur;
        if (rem < 0) return limit + 1; // cur만 더해도 초과

        const denom = cur + prev; // >= 0 (보통 양수)
        if (denom === 0) {
          // denom 0이면 추가 비용은 0 -> total += cur (이미 고려)
          // (실제론 times>0여야 하므로 드물음)
        } else {
          const maxMistakesAllowed = Math.floor(rem / denom);
          if (mistakes > maxMistakesAllowed) return limit + 1; // 초과
        }

        total += cur + mistakes * denom;
        if (total > limit) return limit + 1;
      }
    }
    return total;
  }

  let left = 1;
  let right = maxDiff;
  let answer = right;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (getTotalTimeSafe(mid) <= limit) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}



