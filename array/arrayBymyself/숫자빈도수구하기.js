function answer(s, e){
    let result = [];

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