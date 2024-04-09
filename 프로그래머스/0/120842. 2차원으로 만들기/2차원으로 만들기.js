// num_list를 다음 설명과 같이 2차원 배열로 바꿔 return
// num_list 배열을 n개씩 잘라서 2차원 배열로 만들어야 함

function solution(num_list, n) {
    const result = [];
    for (let i = 0; i < num_list.length; i += n) {
        result.push(num_list.slice(i, i + n));
    }
    return result;
}