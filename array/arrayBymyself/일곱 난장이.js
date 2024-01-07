function answer(chess){
    let result = [];

    let total = 0;
    for(let i=0; i<chess.length;i++){
        total += chess[i];
    }
    total -= 100;

    let faker = [];
    for(let i=0; i<chess.length; i++){
        for(let j=i+1; j<chess.length;j++){
            if(chess[i] + chess[j] == total){
                faker[0] = i;
                faker[1] = j;

                break;
            }
        }
        if(faker.length != 0) break;
    }

    let count =0;
    for(let i=0; i<chess.length;i++){
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