/*
* 붕대 감기
* 형태의 길이 3인 정수
* bandge = [시전 시간, 초당 회복량, 추가 회복량]
* 매초마다 체력을 초당 회복량만큼 회복
* 공격 시간에 맞춰 체력 -= 피해량
* 
*/

function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    const maxHealth = health;
    let currentHealth = health;
    let attackIdx = 0;
    let consecutiveHeal = 0;

    const lastAttackTime = attacks[attacks.length - 1][0];

    for (let time = 1; time <= lastAttackTime; time++) {
        // 공격 시간 체크
        if (attackIdx < attacks.length && attacks[attackIdx][0] === time) {
          // 피해 입음
          currentHealth -= attacks[attackIdx][1];
          attackIdx++;
          consecutiveHeal = 0; // 회복 연속 초기화
          if (currentHealth <= 0) return -1;
        } else {
          // 회복 수행
          consecutiveHeal++;
          currentHealth += x;
          if (consecutiveHeal === t) {
            currentHealth += y;
            consecutiveHeal = 0;
          }
          // 최대 체력 초과 방지
          if (currentHealth > maxHealth) {
            currentHealth = maxHealth;
          }
        }
      }

      return currentHealth;
}