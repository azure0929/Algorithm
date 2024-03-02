function solution(sizes) {
    
    let maxW = 0;
    let maxH = 0;
    
    // 2차원 배열 'sizes'를 받아, 각 배열 내부의 두 숫자를 크기로 가지는 직사각형의 최대 너비와 최대 높이를 찾아 곱하여 반환
    sizes.forEach((size) => {
        size.sort((a, b) => a - b);
        
        const [w, h] = size;
        if (maxW < w) maxW = w;
        if (maxH < h) maxH = h;
    });
    
    return maxW * maxH;
}   