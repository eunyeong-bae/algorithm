function answer(chess){
    let result = [];

    //1.9명(배열 총 합) = 7명(100) + 2명(faker 합)
    let sum=0;
    for(let i=0;i<chess.length;i++){
        sum += chess[i];
    }

    sum -= 100;

    //2. for 두 요소의 합이 faker 합과 같은지 비교 -> i, j
    let faker = [];
    for(let i=0; i<chess.length;i++){
        for(let j=i+1; j<chess.length;j++){
            if(sum == chess[i] + chess[j]){
                faker[0] = i;
                faker[1] = j;
                break;
            }
        }

        if(faker.length != 0) break;
    }

    //3. faker 두명을 제외하고 나머지 배치값을 result에 넣기
    let count = 0;
    for(let i=0; i<chess.length; i++){
        if(faker[0] != i && faker[1] != i){
            result[count++] = chess[i];
        }
    }

    return result;
}

let input = [
    [1,5,6,7,10,12,19,29,33],
    [25,23,11,2,18,3,28,6,37],
    [3,37,5,36,6,22,19,2,28],
];

//1,1,2,2,2,8

for(let i =0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i]))
}