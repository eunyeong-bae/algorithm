function Queue(){
    this.array = [];
}

Queue.prototype.enqueue = function(element){
    this.array.push(element);
}

Queue.prototype.dequeue = function(){
    return this.array.shift();
}

Queue.prototype.isEmpty = function(){
    return this.array.length === 0;
}


function answer(input){
    let result = -1;

    //문자열 -> map(정수 : 0,1로 변경)
    let size = input.length;
    let map = [];
    for(let i=0; i<size;i++){
        map[i] = [];
        for(let j=0; j<size;j++){
            map[i][j] = Number(input[i][j]);
        }
    }
    // console.log(map)

    //시작,끝 vhdlsxm 설정
    let s = [0, size.length - 1];
    let e = [size.length - 1, 0];
    //시작 -> QUeue넣고
    // Queue 순위 === 끝 break;

    /*
        while(큐 값이 있을 때 까지)

        let v = dequeue 큐에 있는걸 빼서
        디큐 값을 주변 좌표에 업데이트해서 이동

        맵안에 있는 좌표값인지 확인하고
        이미 방문했는지 혹은 벽인지 체크
        v==끝 포인트 break;

        map <- 방문처리
        인접한 길을 큐에 넣어준다
    */


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