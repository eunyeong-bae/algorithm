function answer(n,m,k){
    let result = [];

    return result;
}

let input = [
    [8,2,3],
    [10,2,3],
    [20,5,7],
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i + 1} `)
    console.log(answer(input[i][0], input[i][1], input[i][2]));
}