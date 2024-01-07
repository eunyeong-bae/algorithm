function answer(nums){
    let result = [];

    return result;
}

let input = [
    [5,2,10,2],
    [4,5,7,4,8],
    [11,15,12,16,11,12],
];

for(let i =0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i]))
}