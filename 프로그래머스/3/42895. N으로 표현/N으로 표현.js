// 가장 작은 경우 = 4

function solution(N, number) {
    const nCountArr = Array.from(new Array(9), (value, idx) => idx === 0 ? new Set() :  new Set([parseInt(`${N}`.repeat(idx))]));

    // n으로 표현하기 위한 숫자 조합 계산
    for(let i = 1; i < 9; i++) {
        for (let j = 1; j < i; j++) {
            for (const value of nCountArr[j]) {
                for (const anotherValue of nCountArr[i-j]) {
                    // 더하기 연산
                    nCountArr[i].add(value + anotherValue);
                    // 빼기 연산
                    if (value - anotherValue > 0) {
                        nCountArr[i].add(value - anotherValue);
                    }
                    // 곱하기 연산
                    if (value * anotherValue <= number * N) {
                        nCountArr[i].add(value * anotherValue);
                    }
                    // 나누기 연산
                    if ((value % anotherValue) === 0) {
                        nCountArr[i].add(value / anotherValue);
                    }
                }
            }
        }
        // 주어진 수가 만들어진 조합에 존재하면 해당 숫자 개수 반환
        if (nCountArr[i].has(number)) return i;
    }
    // 만들 수 없는 경우 -1 반환
    return -1;

}