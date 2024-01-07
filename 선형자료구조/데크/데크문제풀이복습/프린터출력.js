function answer(priorities, select){
    let result = -1;

    //1.queue 내 우선순위가 가장 높은 문서 확인

    //2.그 문서가 나올 때까지, 나머지 문서는 dequeue -> enqueue(순서바꿈)

    //3.문서번호 select를 찾을때까지 계속 반복

    return result;
}

let input = [
    [[3], 0],
    [[3,4,5,6], 2],
    [[1,1,5,1,1,1], 0],
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i + 1} `)
    console.log(answer(input[i]));
}