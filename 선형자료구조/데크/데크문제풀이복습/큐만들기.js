function answer(cmds){
    let result = [];
    
    //1.cmds => 문자열 파싱 -> 명령어에 따라 함수를 호출

    //2. 호출 후 반환값을 result

    return result;
}


let input = [
    ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue",],
    ["enqueue 3", "enqueue 4", "enqueue 5", "enqueue 6", "front", "back","dequeue","size","empty"],
    ["enqueue 7", "enqueue 8", "front", "back","size","empty","dequeue", "dequeue", "dequeue", "size", "empty", "dequeue","enqueue 9", "empty", "front"],
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i + 1} `)
    console.log(answer(input[i]));
}