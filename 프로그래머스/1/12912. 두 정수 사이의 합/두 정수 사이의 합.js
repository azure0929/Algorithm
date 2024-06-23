function solution(a, b) {
    // a와 b 중에서 작은 값과 큰 값을 구분
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    
    // 등차수열의 합 공식을 이용하여 min부터 max까지의 합을 구함
    // 등차수열의 합 공식 : (시작 값 + 끝 값) * 갯수 / 2
    let sum = (max + min) * (max - min + 1) / 2;
    
    return sum;
}