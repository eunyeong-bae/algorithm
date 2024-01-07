function answer(nums, target){
    
    return [];

}

let input = [
    [[2,7,11,15],9],
    [[3,2,4],6],
    [[3,3],6],
];


for(let i =0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i][0], input[i][1]))
}