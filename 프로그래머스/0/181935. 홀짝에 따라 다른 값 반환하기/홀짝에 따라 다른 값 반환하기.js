function solution(n) {
    return Array.from({ length: Math.floor(n / 2) + 1}, (_, i) => n % 2 === 0 ? (2 * i) ** 2 : 2 * i + 1)
    .reduce((acc, cur) => acc + cur, 0);
}