function answer(n){
    let result = [];

    //1.첫번째 카드는 분배

    //2. 두번째 카드는 맨 아래로 다시 넣기

    //3. 카드가 다 없어질 때까지 1,2번 반복한다

    return result;
}

let input = [
    4,
    7,
    10
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i + 1} `)
    console.log(answer(input[i]));
}