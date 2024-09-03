/**
* 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return
* RegExp : 패턴을 사용해 텍스트를 판별할 때 사용
*/

function solution(t, p) {
    const numberP = Number(p);
    let count = 0;
    const pLen = p.length;
    const regex = new RegExp(`^\\d{${pLen}}$`);

    for (let i = 0; i <= t.length - pLen; i++) {
        const substring = t.substring(i, i + pLen);

        if (regex.test(substring)) {
            const numberSubstring = Number(substring);

            if (numberSubstring <= numberP) {
                count++;
            }
        }
    }

    return count;
}