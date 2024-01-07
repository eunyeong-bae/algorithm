function Graph(){
    this.edge = {}
    this.visited = {}
}
Graph.prototype.bfs = function(v){
    
}


function answer(input){
    let result = -1;

    return result;
}

let input = [
    ["00110","00010","00110","00000","01011",],
    ["00110","00010","00110","00010","01011",],
    ["1111111100","1111111101","1111111101","1000111101","1010111101",
        "1010011101","1011011101","1011011101","1011000001","0011111111",],
]

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i]))
}