/**
* 덧셈의 결과를 return
*/

function zip(arr1, arr2) {
    return arr1.map((_, i) => [arr1[i], arr2[i]]);
}

function solution(arr1, arr2) {
    return zip(arr1, arr2).map(([row1, row2]) =>
      row1.map((val, j) => val + row2[j])                        
    );
}