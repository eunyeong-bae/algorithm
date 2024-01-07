
function answer(train){


    return true;
}

let input = [
    // [1,2,3],
    [3,2,1],
    // [3,1,2],
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i+1} `)
    console.log(answer(input[i]));
}