// 장군개미 : 5의 공격력
// 병정개미 : 3의 공격력
// 사냥감의 체력 hp가 매개변수로 주어짐
// 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지 return

function solution(hp) {
    const antA = parseInt(hp / 5);
    const antB = parseInt((hp % 5) /3);
    const antC = (hp % 5) % 3;
    return antA + antB + antC;
}