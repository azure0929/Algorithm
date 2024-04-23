// 수식을 계산한 값을 return
// split : String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔

function solution(my_string) {
    
    // 주어진 문자열을 공백을 기준으로 배열로 분할
    let arr = my_string.split(" ");

    let answer = arr[0] * 1;
    
    for(let i =1 ; i < arr.length; i++){
        if(arr[i] ==="+"){
            answer += arr[i + 1] * 1;
        }else if(arr[i]==="-"){
            answer -= arr[i + 1] * 1;
        }
    }

    return answer;
}