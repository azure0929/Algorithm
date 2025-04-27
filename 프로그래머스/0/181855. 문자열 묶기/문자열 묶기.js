function solution(strArr) {
    const result = strArr.reduce((acc, cur) => {
        const len = cur.length;
        acc[len] = (acc[len] || 0) + 1;
        return acc;
    }, {});
    
    return Math.max(...Object.values(result));
}