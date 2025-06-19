function solution(num_list) {
    const len = num_list.length;
    const last = num_list[len - 1];
    const prev = num_list[len - 2];

    if (last > prev) {
        num_list.push(last - prev);
    } else {
        num_list.push(last * 2);
    }
    return num_list;
}
