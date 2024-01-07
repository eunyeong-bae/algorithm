function answer(blocks){
    let result = 0;

    //나의 풀이
    // 평균 값 구하기 - 전체 합 / 전체 길이
    // let sum = 0;
    // for(let value of blocks){
    //     sum += value;
    // }

    // sum /= blocks.length;

    // // 평균 값에 부족, 필요한 갯수 체크
    // let newArr = [];
    // for(let i=0; i<blocks.length;i++){
    //     newArr.push(blocks[i] - sum);
    // }

    // for(let val of newArr){
    //     if(val > 0) {
    //         result += val;
    //     }
    // }

    //강의 풀이
    let avg = 0;
    for(let i=0; i<blocks.length;i++){
        avg += blocks[i];
    }
    avg /= blocks.length;

    for(let i=0; i<blocks.length;i++){
        if(blocks[i] > avg){
            result += blocks[i] - avg;
        }
    }

    return result;
}

let input = [
    [5,2,4,1,7,5],
    [12,8,10,11,9,5,8],
    [27,14,19,11,26,25,23,15],
];

//1,1,2,2,2,8

for(let i =0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i]))
}