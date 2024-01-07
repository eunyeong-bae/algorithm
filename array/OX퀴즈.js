function answer(mark){
    let result = 0;

    //내 방법
    // let obj = {};
    // let count = 0;
    // for(let i=0; i<mark.length;i++){
    //     if(mark[i] == 1){
    //         count++;
    //     } else{
    //         count = 0;
    //     }
    //     obj[i] = count;
    // }

    // for(let key in obj){
    //     result += obj[key];
    // }

    //강의
    let score = 0;
    for(let i=0; i<mark.length;i++){
        if(mark[i] == 1){
            result += ++score;
        } else {
            score = 0;
        }
    }

    return result;
}

let input = [
    [1,0,1,1,1,0,1,1,0,0],
    [1,1,0,1,1,0,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,0],
];

//1,1,2,2,2,8

for(let i =0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i]))
}