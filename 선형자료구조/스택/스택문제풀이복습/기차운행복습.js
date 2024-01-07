
function answer(train){
    //1.들어왔다가 나가니까, stack을 만들어야 함
    

    //2.train 만큼 for문을 돌면서, train이 나올 수 있는지 체크
    
        //if(train[i] === 나갈 수 있는 상태인 지 체크)
        
}

let input = [
    [1,2,3],
    [3,2,1],
    [3,1,2],
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i+1} `)
    console.log(answer(input[i]));
}