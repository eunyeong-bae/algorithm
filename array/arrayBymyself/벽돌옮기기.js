function answer(blocks){
    let result = 0;

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