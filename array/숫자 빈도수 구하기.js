function answer(s, e){
    let result = [];

    //1. 각 자릿수 별 index -> 0 만들기
    for(let i=0; i<10; i++){
        result[i] = 0;
    }

    // //2. s <- n <- e
    let num;
    for(let i=s; i<=e; i++){
        num = i;
        //2. n => % / 
        while(num != 0){
            result[num % 10]++;
            num /= 10;
            num = parseInt(num);
        }
    }

    return result;
}

let input = [
    [129,137],
    [1412,1918],
    [4159,9182],
];

//1,1,2,2,2,8

for(let i =0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i]))
}