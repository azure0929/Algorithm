function solution(arr, n) {
    for (i = 0; i < arr.length; i++) {
        if (arr.length % 2 == 0 && i % 2 != 0) {
            arr[i] += n;
        } else if (arr.length % 2 != 0 && i % 2 == 0) {
            arr[i] += n;
        }
    }
    return arr;
}